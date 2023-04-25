var popup = document.getElementById('popup');
var popupInner = document.querySelector('.popup-inner');
var popupClose = document.querySelector('.popup-close');

function openPopup() {
  popup.style.display = 'block';
  setTimeout(function() {
    popupInner.classList.add('show');
  }, 10);
  setTimeout(function() {
    closePopup();
  }, 3000); // tiempo en milisegundos
}

function closePopup() {
  popupInner.classList.remove('show');
  setTimeout(function() {
    popup.style.display = 'none';
  }, 300);
}

popup.addEventListener('click', function(e) {
  if (e.target === popup) {
    closePopup();
  }
});

popupClose.addEventListener('click', function(e) {
  e.preventDefault();
  closePopup();
});

window.addEventListener('load', function() {
  setTimeout(function() {
    openPopup();
  }, 10);
});
``
