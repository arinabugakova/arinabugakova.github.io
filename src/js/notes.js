document.addEventListener('DOMContentLoaded', () => {

        //parse JSON into JS
    
          $.getJSON("js/current-loans.json", function(data) { 
            console.log(data); 
    
            $('.item-name.first').html(data.loans[0].title); 
            $('.modal__loan-title-first').html(data.loans[0].title); 
            $('.item-name.second').html(data.loans[1].title); 
            $('.modal__loan-title-second').html(data.loans[1].title);
            $('.item-name.third').html(data.loans[2].title); 
            $('.modal__loan-title-third').html(data.loans[2].title);
            $('.item-descr.first span').html(data.loans[0].available); 
            $('.item-descr.second span').html(data.loans[1].available);
            $('.item-descr.third span').html(data.loans[2].available);
            $('.item-descr.first span1').html(data.loans[0].ltv); 
            $('.item-descr.second span1').html(data.loans[1].ltv); 
            $('.item-descr.third span1').html(data.loans[2].ltv); 
            $('.modal__available-1 span').html(data.loans[0].available); 
            $('.modal__available-2 span').html(data.loans[1].available);
            $('.modal__available-3 span').html(data.loans[2].available);
            
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
        
        // convert json term remaining data into modal

            const modalTimer1 = document.querySelector('.modal__timer-1 span'),
                  modalTimer2 = document.querySelector('.modal__timer-2 span'),
                  modalTimer3 = document.querySelector('.modal__timer-3 span');
            
            modalTimer1.innerHTML = `${secondsToDhms(data.loans[0].term_remaining)}`;
            modalTimer2.innerHTML = `${secondsToDhms(data.loans[1].term_remaining)}`;
            modalTimer3.innerHTML = `${secondsToDhms(data.loans[2].term_remaining)}`;
        });

    //modal

        const   modalTriggerFirst = document.querySelector('[data-btn-1]'), 
                modalTriggerSecond = document.querySelector('[data-btn-2]'), 
                modalTriggerThird = document.querySelector('[data-btn-3]'),
                modal1 = document.querySelector('[data-modal-1]'),
                modal2 = document.querySelector('[data-modal-2]'),
                modal3 = document.querySelector('[data-modal-3]'),
                modalCloseBtn1 = document.querySelector('[data-close-1]'),
                modalCloseBtn2 = document.querySelector('[data-close-2]'),
                modalCloseBtn3 = document.querySelector('[data-close-3]'),
                investedTrigger1 = document.querySelector('[data-investbtn-1]'),
                investedTrigger2 = document.querySelector('[data-investbtn-2]'),
                investedTrigger3 = document.querySelector('[data-investbtn-3]'),
                investInput = document.querySelector('.modal__input'),
                totalSum = document.querySelector('.investment-amount'),
                investedTextFirst = document.querySelector('[data-invested-1]'), 
                investedTextSecond = document.querySelector('[data-invested-2]'), 
                investedTextThird = document.querySelector('[data-invested-3]');


        //show modal

        modalTriggerFirst.addEventListener('click', () => { 
            modal1.classList.add('show'); 
            modal1.classList.remove('hide'); 
        }); 
     
        modalTriggerSecond.addEventListener('click', () => { 
            modal2.classList.add('show'); 
            modal2.classList.remove('hide'); 
        }); 
        modalTriggerThird.addEventListener('click', () => { 
            modal3.classList.add('show'); 
            modal3.classList.remove('hide'); 
        });

        //close modal

        function closeModalFirst() {
            modal1.classList.add('hide');
            modal1.classList.remove('show');
        }
        function closeModalSecond() {
            modal2.classList.add('hide');
            modal2.classList.remove('show');
        }
        function closeModalThird() {
            modal3.classList.add('hide');
            modal3.classList.remove('show');
        }

        modalCloseBtn1.addEventListener('click', closeModalFirst);
        modalCloseBtn2.addEventListener('click', closeModalSecond);
        modalCloseBtn3.addEventListener('click', closeModalThird);


    //

    function allSumm () { 
        let userSum = investInput.value, 
            total = 238000, 
            sum; 
        if (userSum >= 0) { 
             sum = total - userSum; 
        } 
        totalSum.textContent = `$${sum}`; 
    }

    //closing modal after investment

    investedTrigger1.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
            closeModalFirst(); 
            allSumm(); 
            investedTextFirst.classList.remove('hide'); 
            investedTextFirst.classList.add('show'); 
        
    });
    investedTrigger2.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
            closeModalSecond(); 
            allSumm(); 
            investedTextSecond.classList.remove('hide'); 
            investedTextSecond.classList.add('show'); 
        
    });
    investedTrigger3.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
            closeModalThird(); 
            allSumm(); 
            investedTextThird.classList.remove('hide'); 
            investedTextThird.classList.add('show'); 
        
    });

});