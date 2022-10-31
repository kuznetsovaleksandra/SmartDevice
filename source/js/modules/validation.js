import Pristine from 'pristinejs';
import {sendData} from '../utils/server-api.js';
import {getTelMask} from './form-mask.js';

export const formValidateAndSend = (form) => {
  const tel = form.querySelector('input[type=tel]');
  const submitBtn = form.querySelector('button[type=submit]');
  const submitBtnText = submitBtn.textContent;
  const formName = form.classList.value.split('_')[0];

  getTelMask(tel);

  const blockSubmitButton = () => {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправляю...';
  };

  const unblockSubmitButton = () => {
    submitBtn.disabled = false;
    submitBtn.textContent = submitBtnText;
  };

  const pristine = new Pristine(form, {
    classTo: formName + '__element',
    errorTextParent: formName + '__element',
    errorTextClass: formName + '__element-error-text',
  }, false);

  const validateTel = (value) => {
    return value.indexOf('*') === -1;
  };

  pristine.addValidator(tel, validateTel, tel.dataset.pristineErrorMessage);

  form.addEventListener('change', (evt) => {
    pristine.validate(evt.target);
  });

  function storageForm(formNode) {
    const {elements} = formNode;

    const data = Array.from(elements)
        .map((element) => {
          const {name, type} = element;
          const value = type === 'checkbox' ? element.checked : element.value;

          return {name, value};
        })
        .filter((item) => !!item.name);

    localStorage.setItem('user', JSON.stringify(data));
  }

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      storageForm(evt.target);
      sendData(
          () => {
            unblockSubmitButton();
            form.reset();
          },
          () => {
            unblockSubmitButton();
          },
          formData
      );
    }
  });
};
