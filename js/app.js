'use strict';

var headerSup = document.querySelector('.sup');
var supBtnClose = document.querySelector('.sup__btn-close');
var promotions = document.querySelector('.sup__promotions');
var promotionList = document.querySelectorAll('.sup__promotion');
var step = 0;
var reverse = false;
var intervalId;
var showPromotions = function showPromotions() {
  intervalId = setInterval(autoplay, 4000);
};
var autoplay = function autoplay() {
  if (!reverse) {
    if (step < promotionList.length - 1) {
      step++;
      movement();
    } else {
      reverse = true;
    }
  } else {
    if (step > 0) {
      step--;
      movement();
    } else {
      reverse = false;
    }
  }
};
var movement = function movement() {
  var move = 100 / promotionList.length * -1 * step;
  promotions.style.transform = "translateX(".concat(move, "%)");
};
window.addEventListener('load', showPromotions);
supBtnClose.addEventListener('click', function () {
  headerSup.style.display = 'none';
  clearInterval(intervalId);
  window.removeEventListener('load', showPromotions);
});
var companyToggleCollection = document.querySelectorAll('.company__toggle');
var companySvgCollection = document.querySelectorAll('.company__svg');
var companyUlCollection = document.querySelectorAll('.company__ul');
companyToggleCollection.forEach(function (toggle, i) {
  toggle.addEventListener('click', function () {
    companyUlCollection[i].classList.toggle('company__ul--expanded');
    if (companyUlCollection[i].classList.contains('company__ul--expanded')) {
      companySvgCollection[i].classList.add('company__svg--rotated');
      toggle.ariaExpanded = 'true';
    } else {
      toggle.ariaExpanded = 'false';
      companySvgCollection[i].classList.remove('company__svg--rotated');
    }
  });
});