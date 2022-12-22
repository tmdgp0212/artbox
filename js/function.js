{ /* 슬라이드 */

const slideEl = document.querySelector('.visual>.slide_container>ul');
const slideItems = slideEl.querySelectorAll('li');
const slideBtns = document.querySelectorAll('.indicator > .btn');
const indicator = document.querySelector('.indicator>span');
const bgBox = document.querySelector('main > .bg_box');

let idx = 1;

// 슬라이드 전환(기본)
const slideFn = function(){
  slideEl.style.left = `${idx * -510}px`


  // 메인슬라이드 카드 active효과 (클래스네임)
  slideItems.forEach(function(item){
    item.classList.remove('slide--active');
  });

  slideItems[idx+1].classList.add('slide--active');


  if(idx === 1 || idx === 4) { //슬라이드 배경색 전환효과
    bgBox.style.backgroundColor = '#FFA58C';
  } else if (idx === 2) {
    bgBox.style.backgroundColor = '#028A7C';
  } else {
    bgBox.style.backgroundColor = '#BC74D7';
  }

};

// 자동슬라이드 interval
let intervalKey = setInterval(function(){
  slideBtns.forEach(function(item){
    if(item.classList.contains('btn--next')){
      item.click();
    }
  });
},3000);



slideBtns.forEach(function(btn){
  btn.addEventListener('click',function(){
    
    //이전버튼
    if(this.classList.contains('btn--prev')){
      
      idx--;
      
      if(idx === 0) { //0번 카드 active시 자연스럽게 4번카드로 체인지(무한슬라이드)
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
      
      if(idx === 4) { //4번 카드 active시 자연스럽게 1번카드로 체인지(무한슬라이드)
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

}

{ // wish button active

  const mainWishBtn = document.querySelector('main .container .top_btn a:first-child');
  const liveWishBtn = document.querySelectorAll('.live .container .diary li .item__info .name button');
  
  mainWishBtn.addEventListener('click',function(){
    this.classList.toggle('clicked');
  });
  
  liveWishBtn.forEach(function(btn){
    btn.addEventListener('click',function(){
      this.classList.toggle('clicked');
    });
  });

}

{ // New section slide button

  const newBtns = document.querySelectorAll('.new > .btns > button');
  const newSlide = document.querySelector('.new > .new__products');

  newBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(this.classList.contains('prev')){
        newSlide.style.left = '0px'
      } else {
        newSlide.style.left = '-1280px'
      }
    })
  })

}