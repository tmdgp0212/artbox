const slideEl = document.querySelector('.visual>.slide_container>ul');
const slideItems = slideEl.querySelectorAll('li');
const slideBtns = document.querySelectorAll('.indicator > .btn');
const indicator = document.querySelector('.indicator>span');
const bgBox = document.querySelector('main > .bg_box');

let idx = 1;

const slideFn = function(){
  slideEl.style.left = `${idx * -510}px`

  slideItems.forEach(function(item){
    item.classList.remove('slide--active');
  });

  slideItems[idx+1].classList.add('slide--active');

  if(idx === 1 || idx === 4) {
    bgBox.style.backgroundColor = '#FFA58C';
  } else if (idx === 2) {
    bgBox.style.backgroundColor = '#028A7C';
  } else {
    bgBox.style.backgroundColor = '#BC74D7';
  }

};

let intervalKey = setInterval(function(){
  slideBtns.forEach(function(item){
    if(item.classList.contains('btn--next')){
      item.click();
    }
  });
},3000);

slideBtns.forEach(function(btn){
  btn.addEventListener('click',function(){
    if(this.classList.contains('btn--prev')){
      
      idx--;
      
      if(idx === 0) {
        slideFn();
        slideItems[4].classList.add('slide--active');
        indicator.textContent = `3/3`

        setTimeout(function () {
          slideEl.style.transition = "none";
          slideEl.style.left = -510 * 3 + "px";
          
          setTimeout(function () {
            idx = 3;
            slideEl.style.transition = "left .8s";
          }, 100);
        }, 800);
      } else {
        indicator.textContent = `${idx}/3`
        slideFn();
      }

      
    }else if(this.classList.contains('btn--next')){

      idx++;
      
      if(idx === 4) {
        slideFn();
        slideItems[2].classList.add('slide--active');
        indicator.textContent = `1/3`

        setTimeout(function () {
          slideEl.style.transition = "none";
          slideEl.style.left = -510 * 1 + "px";
          
          setTimeout(function () {
            idx = 1;
            slideEl.style.transition = "left .8s";
          }, 100);
        }, 800);
      } else {
        indicator.textContent = `${idx}/3`
        slideFn();
      }

    }else if (this.classList.contains('btn--pause')) {
      clearInterval(intervalKey);
      this.textContent = 'play_arrow'
      this.classList.remove('btn--pause');
    } else {
      intervalKey = setInterval(function(){
        slideBtns.forEach(function(item){
          if(item.classList.contains('btn--next')){
            item.click();
          }
        });
      },3000);
      this.textContent = 'pause'
      this.classList.add('btn--pause');
    }
  })
});



function solution(denum1, num1, denum2, num2) {
    
  let denum = (denum1 * num2) + (denum2 * num1);
  let num = num1 * num2;
  
  let a;
  let b;
  
  for (i = 1; i < 1000; i++) {
      if(denum % i === 0 && num % i === 0){
          a = denum / i;
          b = num / i;
      } 
  }




