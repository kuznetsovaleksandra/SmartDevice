import inputmask from 'inputmask';

export const getTelMask = (tel) => {
  inputmask('+7(999)999-99-99', {'placeholder': '*'}).mask(tel);
};
