const aboutBtn = document.querySelector('.about__btn');
const hiddenBlocks = document.querySelectorAll('.about__hidden-block');
const hiddenBlocksOnMobile = document.querySelectorAll('.about__hidden-block--on-mobile');
const breakpoint = window.matchMedia('(max-width:767px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    hiddenBlocksOnMobile.forEach((block) => {
      block.classList.remove('about__hidden-block--on-mobile');
    });
  } else {
    hiddenBlocksOnMobile.forEach((block) => {
      block.classList.add('about__hidden-block--on-mobile');
    });
  }
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();


const hideBloks = (block) => {
  block.classList.add('about__hidden-block--close');
};

const showBloks = (block) => {
  block.classList.remove('about__hidden-block--close');
};

export const aboutClose = () => {
  if (aboutBtn) {
    if (hiddenBlocks) {
      hiddenBlocks.forEach((block) => {
        hideBloks(block);
      });

      aboutBtn.classList.add('about__btn--active');

      const openBtnText = aboutBtn.textContent;
      const closeBtnText = aboutBtn.dataset.openText;

      aboutBtn.addEventListener('click', () => {
        if (hiddenBlocks[0].classList.contains('about__hidden-block--close')) {
          hiddenBlocks.forEach((block) => {
            showBloks(block);
          });

          aboutBtn.textContent = closeBtnText;
        } else {
          hiddenBlocks.forEach((block) => {
            hideBloks(block);
          });
          aboutBtn.textContent = openBtnText;
        }
      });
    }
  }
};
