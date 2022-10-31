import animateScrollTo from 'animated-scroll-to';

const form = document.querySelector('.feedback');
const btn = document.querySelector('.prime__btn');
const breakpointMobile = window.matchMedia('(max-width:767px)');
const breakpointTablet = window.matchMedia('(max-width:1023px)');

export const scrollToForm = () => {
  if (form) {
    if (btn) {
      const breakpointChecker = () => {
        if (breakpointMobile.matches) {
          btn.addEventListener('click', () => {
            animateScrollTo(form, {verticalOffset: -50, speed: 500});
          });
        } else {
          if (breakpointTablet.matches) {
            btn.addEventListener('click', () => {
              animateScrollTo(form, {verticalOffset: -80, speed: 500});
            });
          } else {
            btn.addEventListener('click', () => {
              animateScrollTo(form, {verticalOffset: -100, speed: 500});
            });
          }
        }
      };
      breakpointMobile.addListener(breakpointChecker);
      breakpointTablet.addListener(breakpointChecker);
      breakpointChecker();
    }
  }
};
