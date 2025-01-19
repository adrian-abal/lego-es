"use strict";

var quicklinks = {
  shortcuts: [{
    name: 'Novedades',
    media: {
      src: 'quicklink-news.webp',
      alt: 'Atajo Novedades',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Exclusivas',
    media: {
      src: 'quicklink-exclusives.webp',
      alt: 'Atajo Exclusivas',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Ofertas',
    media: {
      src: 'quicklink-offers.webp',
      alt: 'Atajo Ofertas',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Todos los sets',
    media: {
      src: 'quicklink-all-sets.webp',
      alt: 'Atajo Todos los sets',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Más de 18 años',
    media: {
      src: 'quicklink-more-years-old.webp',
      alt: 'Atajo Más de 18 años',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Para peques',
    media: {
      src: 'quicklink-for-kids.webp',
      alt: 'Atajo Para peques',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Comprar por precio',
    media: {
      src: 'quicklink-shop-by-price.webp',
      alt: 'Atajo Comprar por precio',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Obtén recompensas',
    media: {
      src: 'quicklink-insiders.webp',
      alt: 'Atajo Obtén recompensas',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }],
  themes: [{
    name: 'LEGO® Icons',
    media: {
      src: 'theme-icons.webp',
      alt: 'Tematica LEGO® Icons',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Star Wars™',
    media: {
      src: 'theme-star-wars.webp',
      alt: 'Tematica Star Wars™',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Colección Botanical',
    media: {
      src: 'theme-botanical.webp',
      alt: 'Tematica Colección Botanical',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Harry Potter™',
    media: {
      src: 'theme-harry-potter.webp',
      alt: 'Tematica Harry Potter™',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Creator 3in1',
    media: {
      src: 'theme-creator.webp',
      alt: 'Tematica Creator 3in1',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Marvel',
    media: {
      src: 'theme-marvel.webp',
      alt: 'Tematica Marvel',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Technic',
    media: {
      src: 'theme-technic.webp',
      alt: 'Tematica Technic',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'City',
    media: {
      src: 'theme-city.webp',
      alt: 'Tematica City',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Disney™',
    media: {
      src: 'theme-disney.webp',
      alt: 'Tematica Disney™',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }, {
    name: 'Friends',
    media: {
      src: 'theme-friends.webp',
      alt: 'Tematica Friends',
      width: 220,
      height: 180,
      aspectRatio: '11/9'
    }
  }]
};
var renderAnchors = function renderAnchors(sectionName, containerSelector) {
  var container = document.querySelector(".".concat(containerSelector));
  fetch("components/".concat(sectionName, ".html")).then(function (response) {
    return response.text();
  }).then(function (html) {
    var templateContainer = document.createElement('div');
    templateContainer.innerHTML = html;

    // Seleccionar el template
    var template = templateContainer.querySelector("#".concat(sectionName, "__template"));

    // Mapear datos
    quicklinks[sectionName].forEach(function (item) {
      var element = template.content.cloneNode(true);
      var elementImg = element.querySelector(".".concat(sectionName, "__img"));
      var elementSpan = element.querySelector(".".concat(sectionName, "__span"));
      elementImg.src = "assets/img/".concat(item.media.src);
      elementImg.alt = item.media.alt;
      elementImg.width = item.media.width;
      elementImg.height = item.media.height;
      elementImg.style.aspectRatio = item.media.aspectRatio;
      elementSpan.textContent = item.name;
      container.appendChild(element);
    });
  }).catch(function (error) {
    return console.error('Error al cargar el template:', error);
  });
};
renderAnchors('shortcuts', 'shortcuts__container');
renderAnchors('themes', 'themes__container');