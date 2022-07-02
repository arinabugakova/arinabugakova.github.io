document.addEventListener('DOMContentLoaded', () => {

    //modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]'),
          invested = document.querySelectorAll('.invested'),
          investedTrigger = document.querySelector('[data-invested]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    }); 

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    modalCloseBtn.addEventListener('click', closeModal);

    function showInvested() {
        invested.forEach(item => {
            item.classList.add('show');
            item.classList.remove('hide');
        });
    }

    investedTrigger.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal();
        showInvested();
        
    });


});