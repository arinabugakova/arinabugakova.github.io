document.addEventListener('DOMContentLoaded', () => {

    //modal

    const modalTriggerFirst = document.querySelector('[data-modal-1]'), 
          modalTriggerSecond = document.querySelector('[data-modal-2]'), 
          modalTriggerThird = document.querySelector('[data-modal-3]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]'),
          investedTrigger = document.querySelector('[data-invested]'),
          investInput = document.querySelector('.modal__input'),
          totalSum = document.querySelector('.investment-amount'),
          investedTextFirst = document.querySelector('[data-invested-1]'), 
          investedTextSecond = document.querySelector('[data-invested-2]'), 
          investedTextThird = document.querySelector('[data-invested-3]');

        modalTriggerFirst.addEventListener('click', () => { 
            modal.classList.add('show'); 
            modal.classList.remove('hide'); 
            investedTrigger.classList.add('first'); 
        }); 
     
        modalTriggerSecond.addEventListener('click', () => { 
            modal.classList.add('show'); 
            modal.classList.remove('hide'); 
            investedTrigger.classList.add('second'); 
        }); 
        modalTriggerThird.addEventListener('click', () => { 
            modal.classList.add('show'); 
            modal.classList.remove('hide'); 
            investedTrigger.classList.add('third'); 
        });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        investedTrigger.classList.remove('first', 'second', 'third');
    }
    modalCloseBtn.addEventListener('click', closeModal);


    function allSumm () { 
        let userSum = investInput.value, 
            total = 238000, 
            sum; 
        if (userSum >= 0) { 
             sum = total - userSum; 
        } 
        totalSum.textContent = `$${sum}`; 
    }
    investedTrigger.addEventListener('click', (event) => { 
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

//seconds to days converter

    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        }

//parse JSON into JS

    $.getJSON("js/current-loans.json", function(data) { 
        console.log(data); 
 
        $('.item-name.first').html(data.loans[0].title); 
        $('.modal__loan-title').html(data.loans[0].title); 
        $('.item-name.second').html(data.loans[1].title); 
        $('.item-name.third').html(data.loans[2].title); 
        $('.item-descr.first span').html(data.loans[0].tranche); 
        $('.item-descr.second span').html(data.loans[1].tranche);
        $('.item-descr.third span').html(data.loans[2].tranche);
        $('.item-descr.first span1').html(data.loans[0].ltv); 
        $('.item-descr.second span1').html(data.loans[1].ltv); 
        $('.item-descr.third span1').html(data.loans[2].ltv); 

        $('.modal__available span').html(data.loans[0].available); 
        $('.modal__available span').html(data.loans[0].available); 
        
        const modalTimer = document.querySelector('.modal__timer span');
        let newData = data.loans[0].term_remaining;
        secondsToDhms(newData);

        modalTimer.innerHTML = secondsToDhms(newData);

        function toggleModalContent() {

        }

    });


});