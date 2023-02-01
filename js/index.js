// Nav Bar Expanding BTN

const navBtn = document.getElementById('navBtn');
const hiddenNavBar = document.getElementById('hiddenNavBar');
const navBtnBar1 = document.getElementById('bar1');
const navBtnBar2 = document.getElementById('bar2');
const navBtnBar3 = document.getElementById('bar3');
// console.log(navBtn);

navBtn.addEventListener('click', () => {
  if (navBtn.classList.contains('btnOpened')) {
    navBtn.innerHTML = `<div id="bar1"></div>
    <div id="bar2"></div>
    <div id="bar3"></div>`;

    navBtn.style.justifyContent = 'space-between';
    navBtn.style.transform = 'rotate(0deg)';
    navBtn.style.width = '25px';
    navBtn.style.height = '20px';

    hiddenNavBar.style.opacity = 0;
    hiddenNavBar.style.transition = 'all 0.5s';

    hiddenNavBar.style.display = 'none';

    navBtn.classList.remove('btnOpened');

    return;
  } else {
    navBtn.innerHTML = '&times;';
    navBtn.style.justifyContent = 'center';
    navBtn.style.alignItems = 'center';
    navBtn.style.width = '50px';
    navBtn.style.height = '40px';
    navBtn.style.fontSize = '45px';
    navBtn.style.fontWeight = '200';

    navBtn.style.transform = 'translate(15px, -5px)';

    hiddenNavBar.style.display = 'flex';
    hiddenNavBar.style.transition = 'all 0.5s';
    hiddenNavBar.style.opacity = 1;
    navBtn.classList.add('btnOpened');
  }
});

// ANIMATIONS

const navBar = document.getElementById('hero-navBar');
const heroContent = document.getElementById('hero-sideContent');

// /////////////////////////
// Intersection Observer API
// /////////////////////////

navBar.style.animation = 'navIn 1s linear';

setTimeout(() => {
  navBar.style.marginTop = '0';
  navBar.style.opacity = 1;

  heroContent.style.animation = 'heroContentIn 1s linear';

  setTimeout(() => {
    heroContent.style.marginLeft = '0';
    heroContent.style.opacity = 1;
  }, 1000);
}, 1000);

// Numbers Animation
let numAni1 = document.getElementById('number-display-value-1'),
  numAni2 = document.getElementById('number-display-value-2'),
  numAni3 = document.getElementById('number-display-value-3'),
  numAni4 = document.getElementById('number-display-value-4');

let numAni1Value = 0,
  numAni2Value = 0,
  numAni3Value = 0,
  numAni4Value = 0;

let allNumAniData = [
  [numAni1, numAni1Value],
  [numAni2, numAni2Value],
  [numAni3, numAni3Value],
  [numAni4, numAni4Value],
];

// const numberAniTimer1 = setInterval(() => {
//   if (numAni1Value == numAni1.dataset.max) {
//     clearInterval(numberAni1Timer);
//     return;
//   }
//   numAni1Value++;
//   numAni1.innerHTML = numAni1Value;
// }, 1);

// const numberAniTimer2 = setInterval(() => {
//   if (numAni2Value == numAni2.dataset.max) {
//     clearInterval(numberAni2Timer);
//     return;
//   }
//   numAni2Value++;
//   numAni2.innerHTML = numAni2Value;
// }, 1);
// const numberAniTimer3 = setInterval(() => {
//   if (numAni3Value == numAni3.dataset.max) {
//     clearInterval(numberAni3Timer);
//     return;
//   }
//   numAni3Value++;
//   numAni3.innerHTML = numAni3Value;
// }, 1);
// const numberAniTimer4 = setInterval(() => {
//   if (numAni4Value == numAni4.dataset.max) {
//     clearInterval(numberAni4Timer);
//     return;
//   }
//   numAni4Value++;
//   numAni4.innerHTML = numAni4Value;
// }, 1);

// ANIMATIONS
const numbersSection = document.getElementById('numbers');
const numberObserver = new IntersectionObserver(
  (entires) => {
    // console.log(entires);
    if (entires[0].isIntersecting) {
      allNumAniData.forEach((el, i) => {
        let numAni = el[0];
        let numAniVal = el[1];

        setInterval(() => {
          if (numAniVal == numAni.dataset.max) {
            clearInterval();
            return;
          }
          numAniVal++;
          numAni.innerHTML = numAniVal;
        }, 50);
        numberObserver.unobserve(numbersSection);
      });
    }
  },
  {
    threshold: 0.1,
  }
);

numberObserver.observe(numbersSection);

// Another One
const infoSector1 = document.getElementById('info-sector-1');
const infoSector1Content = infoSector1.children[0];
const infoSector1Image = infoSector1.children[1];

const infoSector2 = document.getElementById('info-sector-2');
const infoSector2Content = infoSector2.children[0];
const infoSector2Image = infoSector2.children[1];
// console.log(infoSector1Content);
const itemsObserver = new IntersectionObserver(
  (entries) => {
    // console.log(entries[0]);
    if (entries[0].target.id === 'info-sector-1') {
      if (entries[0].isIntersecting) {
        infoSector1.style.transition = 'all 0.5s';
        infoSector1Content.style.transition = 'all 0.5s';
        infoSector1Image.style.transition = 'all 0.5s';

        infoSector1Content.style.marginLeft = '0';
        infoSector1Image.style.marginRight = '0';
        infoSector1.style.opacity = '1';
      } else {
        infoSector1.style.transition = 'all 0.5s';
        infoSector1Content.style.transition = 'all 0.5s';
        infoSector1Image.style.transition = 'all 0.5s';

        infoSector1Content.style.marginLeft = '-100px';
        infoSector1Image.style.marginRight = '-100px';
        infoSector1.style.opacity = '0';
      }
      return;
    }
    if (entries[0].target.id === 'info-sector-2') {
      if (entries[0].isIntersecting) {
        infoSector2.style.transition = 'all 0.5s';
        infoSector2Content.style.transition = 'all 0.5s';
        infoSector2Image.style.transition = 'all 0.5s';

        infoSector2Content.style.marginLeft = '0';
        infoSector2Image.style.marginRight = '0';
        infoSector2.style.opacity = '1';
      } else {
        infoSector2.style.transition = 'all 0.5s';
        infoSector2Content.style.transition = 'all 0.5s';
        infoSector2Image.style.transition = 'all 0.5s';

        infoSector2Content.style.marginLeft = '-100px';
        infoSector2Image.style.marginRight = '-100px';
        infoSector2.style.opacity = '0';
      }
    }
  },
  {
    threshold: 0.4,
  }
);

itemsObserver.observe(infoSector1);
itemsObserver.observe(infoSector2);
