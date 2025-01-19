const discoveries = [
    { 
        name: '10 cosas que debes saber sobre la Esquina Tudor LEGO® Icons',
        description: 'Ven a recorrer con nosotros la nueva Esquina Tudor LEGO® Icons.',
        url: '#',
        media: {
            src: '01-CardContent-ICONS-ProjectModular(Tudor).webp',
            alt: 'Esquina Tudor LEGO® Icons',
            width: 635,
            height: 440,
            aspectRatio: '127/88'
        }
    },
    { 
        name: 'Los mejores regalos para los amantes de los viajes',
        description: 'Desde icónicos paisajes urbanos hasta famosos monumentos, encuentra el set LEGO® inspirado en los viajes ideal para tu trotamundos.',
        url: '#',
        media: {
            src: 'HERO_-_Mobile.webp',
            alt: 'Amantes de los viajes',
            width: 635,
            height: 440,
            aspectRatio: '127/88'
        }
    },
    { 
        name: '¿Recuerdas estos sets LEGO® clásicos de tu infancia?',
        description: 'El lanzamiento del set LEGO® Icons Fortaleza Tropical es la ocasión perfecta para dar una mirada a algunos de nuestros temas más memorables en el baúl de los recuerdos…',
        url: '#',
        media: {
            src: '230414_Design_brief_Reboot_article_Card_Content.webp',
            alt: 'LEGO® clásicos de infancia',
            width: 635,
            height: 440,
            aspectRatio: '127/88'
        }
    },
    { 
        name: 'Ideas de los mejores regalos de Star Wars™ para adultos',
        description: 'Descubre nuestra selección especial de ideas de los mejores regalos de LEGO® Star Wars™ para adultos, que incluye desde detallados modelos de droides hasta trepidantes sets de naves estelares.',
        url: '#',
        media: {
            src: 'HERO-_75398_Mobile.webp',
            alt: 'Ideas LEGO® Star Wars™',
            width: 635,
            height: 440,
            aspectRatio: '127/88'
        }
    }
]

const discoverContainer = document.querySelector('.discover__container') as HTMLDivElement

fetch('components/discover.html')
    .then(response => response.text())
    .then(html => {
        const templateContainer = document.createElement('div')
        templateContainer.innerHTML = html

        // Seleccionar el template
        const template = templateContainer.querySelector('#discover__template') as HTMLTemplateElement

        // Mapear datos
        discoveries.forEach(item => {
            const discover = template.content.cloneNode(true) as DocumentFragment
            const overviewAnchor = discover.querySelector('.discover__overview') as HTMLAnchorElement
            const img = discover.querySelector('.discover__img') as HTMLImageElement
            const h3 = discover.querySelector('.discover__h3') as HTMLHeadingElement
            const description = discover.querySelector('.discover__p') as HTMLParagraphElement

            overviewAnchor.href = item.url
            overviewAnchor.title = item.media.alt
            img.src = `assets/img/${item.media.src}`
            img.width = item.media.width
            img.height = item.media.height
            img.style.aspectRatio = item.media.aspectRatio
            h3.textContent = item.name
            description.textContent = item.description

            discoverContainer.appendChild(discover)
        })
    }).catch(error => console.error('Error al cargar el template:', error))
