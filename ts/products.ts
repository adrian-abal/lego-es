const products = {
    'new-arrivals': [
        {   
            url: '#',
            name: 'Bambú de la Suerte',
            price: '29,99',
            media: {
                src: '10344_Prod.png',
                alt: 'Bambú de la suerte',
                width: 129,
                height: 250,
                aspectRatio: '129/250'
            },
            tag: 'Novedad',
            specs: {
                age: '18',
                pieces: '325'
            },
        },
        {
            url: '#',
            name: 'Miniorquídea',
            price: '29,79',
            media: {
                src: '10343_Prod.png',
                alt: 'Miniorquídea',
                width: 221,
                height: 250,
                aspectRatio: '221/250'
            },
            tag: 'Novedad',
            specs: {
                age: '18',
                pieces: '274'
            }
        },
        {
            url: '#',
            name: 'Viaje en Moto de Hagrid™ y Harry',
            price: '49,99',
            media: {
                src: '76443_Prod_en-gb.png',
                alt: 'Viaje en Moto de Hagrid',
                width: 250,
                height: 249,
                aspectRatio: '250/249'
            },
            tag: 'Novedad',
            specs: {
                age: '9',
                pieces: '617'
            }
        },
        {
            url: '#',
            name: 'Caza Estelar ARC-170',
            price: '69,99',
            media: {
                src: '75402_Prod_en-gb.png',
                alt: 'Caza Estelar ARC-170',
                width: 250,
                height: 109,
                aspectRatio: '250/109'
                },
            tag: 'Novedad',
            specs: {
                age: '9',
                pieces: '497'
            }
        },
        {
            url: '#',
            name: 'Fauna Salvaje: Familia de Pandas',
            price: '39,99',
            media: {
                src: '31165_Prod_en-gb.png',
                alt: 'Fauna Salvaje: Familia de Pandas',
                width: 250,
                height: 245,
                aspectRatio: '50/49'
                },
            tag: 'Novedad',
            specs: {
                age: '8',
                pieces: '626'
            }
        },
        {   
            url: '#',
            name: 'LOVE',
            price: '79,99',
            media: {
                src: '31214_Prod_en-gb.png',
                alt: 'Love',
                width: 233,
                height: 250,
                aspectRatio: '233/250'
            },
            tag: 'Novedad',
            specs: {
                age: '18',
                pieces: '791'
            }
        },
        {
            url: '#',
            name: 'Moto Ducati Panigale V4 S',
            price: '199,99',
            media: {
                src: '42202_Prod_en-gb.png',
                alt: 'Moto Ducati Panigale V4 S',
                width: 250,
                height: 226,
                aspectRatio: '125/113'
            },
            tag: 'Novedad',
            specs: {
                age: '18',
                pieces: '1603'
            }
        },
        {
            url: '#',
            name: 'Farol chino',
            price: '99,99',
            media: {
                src: '80116_Prod_en-gb.png',
                alt: 'Farol chino',
                width: 250,
                height: 186,
                aspectRatio: '125/93'
            },
            tag: 'Novedad',
            specs: {
                age: '9',
                pieces: '1295'
            }
        },
        {
            url: '#',
            name: 'Logotipo de MARVEL y Minifiguras',
            price: '99,99',
            media: {
                src: '76313_Prod_en-gb.png',
                alt: 'Logotipo de MARVEL y Minifiguras',
                width: 250,
                height: 128,
                aspectRatio: '125/64'
            },
            tag: 'Novedad',
            specs: {
                age: '12',
                pieces: '931'
            }
        },
        {
            url: '#',
            name: 'Coche Ferrari SF-24 F1',
            price: '229,99',
            media: {
                src: '42207_Prod_en-gb.png',
                alt: 'Coche Ferrari SF-24 F1',
                width: 250,
                height: 112,
                aspectRatio: '125/56'
            },
            tag: 'Novedad',
            specs: {
                age: '18',
                pieces: '1361'
            }
        }
    ]
}

const renderProducts = (sectionName: string, containerSelector: string) => {
    const container = document.querySelector(`.${containerSelector}`) as HTMLDivElement
    
    fetch(`components/${sectionName}.html`)
        .then(response => response.text())
        .then(html => {
            const templateContainer = document.createElement('div')
            templateContainer.innerHTML = html
        
            // Seleccionar el template
            const template = templateContainer.querySelector(`#${sectionName}__template`) as HTMLTemplateElement
        
            // Mapear datos
            products[sectionName].forEach(item => {
                const element = template.content.cloneNode(true) as DocumentFragment
                const anchorName = element.querySelector(`.${sectionName}__name`) as HTMLAnchorElement
                const anchorOverview = element.querySelector(`.${sectionName}__overview`) as HTMLAnchorElement
                const price = element.querySelector(`.${sectionName}__price`) as HTMLSpanElement
                const productImg = element.querySelector(`.${sectionName}__img`) as HTMLImageElement
                const tag = element.querySelector(`.${sectionName}__tag`) as HTMLSpanElement
                const age = element.querySelector(`.${sectionName}__span--age`) as HTMLSpanElement
                const pieces = element.querySelector(`.${sectionName}__span--pieces`) as HTMLSpanElement
            
                anchorName.href = item.url
                anchorName.textContent = item.name
                anchorOverview.href = item.url
                price.textContent = `${item.price} €`
                productImg.src = `assets/img/${item.media.src}`
                productImg.alt = item.media.alt
                productImg.width = item.media.width
                productImg.height = item.media.height
                productImg.style.aspectRatio = item.media.aspectRatio
                tag.textContent = item.tag
                age.textContent = `${item.specs.age}+`
                pieces.textContent = item.specs.pieces
            
                container.appendChild(element)
            })
        }).catch(error => console.error('Error al cargar el template:', error))
}

renderProducts('new-arrivals', 'new-arrivals__container')

const newArrContainer = document.querySelector('.new-arrivals__container') as HTMLDivElement
const newArrCtrls = document.querySelectorAll('.new-arrivals__control') as NodeListOf<HTMLButtonElement>
const newArrProducts = products['new-arrivals'].length

function getCardsPerView() {
    const width = window.innerWidth;

    if (width <= 640) return 1;
    if (width <= 768) return 2;
    if (width <= 1024) return 3;
    if (width <= 1280) return 4;
    return 5;
}

function handleControls() {
    if (counter === 0) {
        newArrCtrls[0].disabled = true
        newArrCtrls[0].style.visibility = 'hidden'
    } else {
        newArrCtrls[0].disabled = false
        newArrCtrls[0].style.visibility = 'visible'
    }
    
    if (counter >= newArrProducts - getCardsPerView()) {
        newArrCtrls[1].disabled = true
        newArrCtrls[1].style.visibility = 'hidden'
    } else {
        newArrCtrls[1].disabled = false
        newArrCtrls[1].style.visibility = 'visible'
    }
}


let counter = 0
const productsPerView = getCardsPerView()

handleControls()

newArrCtrls.forEach( (ctrl, i) => {
    ctrl.addEventListener('click', () => {
        if (i === 0) {
            if (counter > 0) {
                counter--
                let move = 100 / newArrProducts * counter * -1
                newArrContainer.style.transform = `translateX(${move}%)`
            } else {
                counter = 0
            }

            handleControls()
        } else {
            if (counter < newArrProducts - getCardsPerView()) {
                counter++
                let move = 100 / newArrProducts * counter * -1
                newArrContainer.style.transform = `translateX(${move}%)`
            } else {
                counter = newArrProducts - getCardsPerView()
            }

            handleControls()
        }
    })
})
