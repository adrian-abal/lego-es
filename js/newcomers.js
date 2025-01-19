"use strict";

var newcomers = [{
  name: '¡Disfruta de un mágico día de compras!',
  description: 'El nuevo set Tiendas mágicas del Callejón Diagon de LEGO® Harry Potter™ constituye una hechizante pieza de exposición.',
  url: '#',
  media: {
    bg: {
      src: 'HP-76444-HT-202501-Block-Standard.webp',
      alt: 'Set Tiendas mágicas del Callejón Diagon',
      width: 635,
      height: 440,
      aspectRatio: '127/88'
    },
    logo: {
      src: 'harrypotter_logo_gold_divider-600w.webp',
      alt: 'Harry Potter logo',
      width: 162,
      height: 60,
      aspectRatio: '27/10'
    }
  }
}, {
  name: 'Cultiva tu creatividad',
  description: 'Desata la alegría con el nuevo set Ramo de flores fantasía en rosa de LEGO® Botanical.',
  url: '#',
  media: {
    bg: {
      src: 'Botanicals-10342-HT-202501-Block-Standard.webp',
      alt: 'Set Ramo de flores fantasía en rosa',
      width: 635,
      height: 440,
      aspectRatio: '127/88'
    },
    logo: {
      src: 'botanicals_2025_600w-w.webp',
      alt: 'Botanicals logo',
      width: 493,
      height: 60,
      aspectRatio: '493/60'
    }
  }
}, {
  name: 'Nuevo set Blacktron Renegade',
  description: 'Vuelve a lanzarte de lleno a la diversión con un set inspirado en los sets espaciales LEGO® de los 80.',
  url: '#',
  media: {
    bg: {
      src: '10355-Home-202501-Home-SL-Block-Standard.webp',
      alt: 'Blacktron Renegade',
      width: 635,
      height: 440,
      aspectRatio: '127/88'
    },
    logo: {
      src: 'blacktron-renegade-logo-pos-600w.webp',
      alt: 'Blacktron Renegade logo',
      width: 203,
      height: 60,
      aspectRatio: '203/60'
    }
  }
}];
var newcomersContainer = document.querySelector('.newcomers__container');
fetch('components/newcomers.html').then(function (response) {
  return response.text();
}).then(function (html) {
  var templateContainer = document.createElement('div');
  templateContainer.innerHTML = html;

  // Seleccionar el template
  var template = templateContainer.querySelector('#newcomers__template');

  // Mapear datos
  newcomers.forEach(function (item) {
    var newcomer = template.content.cloneNode(true);
    var overviewAnchor = newcomer.querySelector('.newcomers__overview');
    var shopAnchor = newcomer.querySelector('.newcomers__shop');
    var bgImg = newcomer.querySelector('.newcomers__img--bg');
    var logoImg = newcomer.querySelector('.newcomers__img--logo');
    var h3 = newcomer.querySelector('.newcomers__h3');
    var description = newcomer.querySelector('.newcomers__p');
    overviewAnchor.href = item.url;
    overviewAnchor.title = item.media.bg.alt;
    bgImg.src = "assets/img/".concat(item.media.bg.src);
    bgImg.width = item.media.bg.width;
    bgImg.height = item.media.bg.height;
    bgImg.style.aspectRatio = item.media.bg.aspectRatio;
    logoImg.src = "assets/img/".concat(item.media.logo.src);
    logoImg.width = item.media.logo.width;
    logoImg.height = item.media.logo.height;
    logoImg.style.aspectRatio = item.media.logo.aspectRatio;
    h3.textContent = item.name;
    description.textContent = item.description;
    shopAnchor.href = item.url;
    newcomersContainer.appendChild(newcomer);
  });
}).catch(function (error) {
  return console.error('Error al cargar el template:', error);
});