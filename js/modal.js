
// // Нужно доделать!!!!!

// document.addEventListener("DOMContentLoaded", function() {
//   const contactModal = document.getElementById('contact-modal');
//   const modalOpenButton = document.querySelector('[data-modal-open]');
//   const modalCloseButton = document.getElementById('modal-close');
//   const modalCheckbox = document.getElementById('modal-checkbox');

//   modalOpenButton.addEventListener('click', () => {
//     contactModal.style.display = 'block';
//   });

//   modalCloseButton.addEventListener('click', () => {
//     contactModal.style.display = 'none';
//   });

//   window.addEventListener('click', (event) => {
//     if (event.target === contactModal) {
//       contactModal.style.display = 'none';
//     }
//   });

//   modalCheckbox.addEventListener('change', () => {
//     if (modalCheckbox.checked) {
//       contactModal.style.display = 'block';
//     } else {
//       contactModal.style.display = 'none';
//     }
//   });
// });

// Задачи:
// 1. Не отображается закрывающаяся иконка-крестик. 
// 2. Затемнение фона происходит не при появлении окна, а при нажатии на крестик.
// 3. При нажатии на крестик окно не закрывается.