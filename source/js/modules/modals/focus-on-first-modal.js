export const focusOnFirstModal = (modal) => {
  const inputs = modal.querySelectorAll('input');
  setTimeout(() => {
    inputs[0].focus({focusVisible: true});
  }, 500);
};
