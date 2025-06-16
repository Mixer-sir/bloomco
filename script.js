document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');
    const modalClose = document.getElementById('modal-close');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const name = card.dataset.name;
        const desc = card.dataset.desc;
        const price = card.dataset.price;
  
        modalTitle.textContent = name;
        modalDesc.textContent = desc;
        modalPrice.textContent = price;
        
        modal.style.display = 'flex';
        const content = modal.querySelector('.modal__content');
        content.style.animation = 'none';
        void content.offsetWidth; // хак чтобы сбросить анимацию
        content.style.animation = 'modalShow 0.4s ease-out forwards';


        modal.style.display = 'flex';
      });
    });
  
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });
  });
  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_uzowraa', 'template_5jlex1n', this)
      .then(function() {
        alert('Спасибо! Ваша заявка отправлена.');
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('Ошибка при отправке, попробуйте ещё раз.');
        console.error('EmailJS Error:', error);
      });
  });
// Инициализация EmailJS  