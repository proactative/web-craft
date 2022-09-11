const teamLabel = document.querySelector('.footer__scroll-container');
const teamList = teamLabel.querySelector('.footer__list');
const teamElements = teamList.querySelectorAll('.footer__item');

 //

let step=0;

teamLabel.addEventListener('wheel', (e)=>{
  e.preventDefault();
  step=step+e.deltaY*0.05; // шаг для колесика

  animationScroll(step);
})

const stepper = setInterval(()=>{
  
  const hightList = teamElements[0].offsetHeight * teamElements.length;

  step = step+0.4;
  animationScroll(step);

  if (step >= hightList) {
    step = 0;
  } else if(step <=0) {
    step = hightList;
  }
}, 30);

function animationScroll(step) {
   teamList.style.top =`-${step}px`;
}



