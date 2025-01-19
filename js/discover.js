"use strict";

var discoveries = [{
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
}, {
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
}, {
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
}, {
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
}];
var discoverContainer = document.querySelector('.discover__container');
fetch('components/discover.html').then(function (response) {
  return response.text();
}).then(function (html) {
  var templateContainer = document.createElement('div');
  templateContainer.innerHTML = html;

  // Seleccionar el template
  var template = templateContainer.querySelector('#discover__template');

  // Mapear datos
  discoveries.forEach(function (item) {
    var discover = template.content.cloneNode(true);
    var overviewAnchor = discover.querySelector('.discover__overview');
    var img = discover.querySelector('.discover__img');
    var h3 = discover.querySelector('.discover__h3');
    var description = discover.querySelector('.discover__p');
    overviewAnchor.href = item.url;
    overviewAnchor.title = item.media.alt;
    img.src = "assets/img/".concat(item.media.src);
    img.width = item.media.width;
    img.height = item.media.height;
    img.style.aspectRatio = item.media.aspectRatio;
    h3.textContent = item.name;
    description.textContent = item.description;
    discoverContainer.appendChild(discover);
  });
}).catch(function (error) {
  return console.error('Error al cargar el template:', error);
});