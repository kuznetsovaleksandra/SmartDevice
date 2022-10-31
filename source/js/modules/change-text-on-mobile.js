const changeableElements = document.querySelectorAll('[data-mobile-text]');
const breakpoint = window.matchMedia('(max-width:767px)');

changeableElements.forEach((element) => {
  element.dataset.desktopText = element.textContent;
});

export const changeTextOnMobile = () => {
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      changeableElements.forEach((element) => {
        element.textContent = element.dataset.mobileText;
      });
    } else {
      changeableElements.forEach((element) => {
        element.textContent = element.dataset.desktopText;
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};
