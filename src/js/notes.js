const modalTriggerFirst = document.querySelector('[data-modal-1]'), 
          modalTriggerSecond = document.querySelector('[data-modal-2]'), 
          modalTriggerThird = document.querySelector('[data-modal-3]');




          modalTriggerFirst.addEventListener('click', () => { 
            modal.classList.add('show'); 
            modal.classList.remove('hide'); 
            investBtn.classList.add('first'); 
        }); 
     
        modalTriggerSecond.addEventListener('click', () => { 
            modal.classList.add('show'); 
            modal.classList.remove('hide'); 
            investBtn.classList.add('second'); 
        }); 
        modalTriggerThird.addEventListener('click', () => { 
            modal.classList.add('show'); 
            modal.classList.remove('hide'); 
            investBtn.classList.add('third'); 
        });

        


investBtn.classList.remove('first', 'second', 'third');


investedTextFirst = document.querySelector('[data-invested1]'), 
          investedTextSecond = document.querySelector('[data-invested2]'), 
          investedTextThird = document.querySelector('[data-invested3]'),


          investBtn.addEventListener('click', (event) => { 
            event.preventDefault(); 
            const target = event.target; 
            if (target && target.classList.contains('first')) { 
                closeModal(); 
                allSumm(); 
                investedTextFirst.classList.remove('hide'); 
                investedTextFirst.classList.add('show'); 
            } else if (target && target.classList.contains('second')) { 
                closeModal(); 
                allSumm(); 
                investedTextSecond.classList.add('show'); 
                investedTextSecond.classList.remove('hide'); 
            } else if (target && target.classList.contains('third')) { 
                closeModal(); 
                allSumm(); 
                investedTextThird.classList.add('show'); 
                investedTextThird.classList.remove('hide'); 
            } 
        });