export const sendData = (onSuccess, onFail, body) => {
  fetch(
      'https://echo.htmlacademy.ru/',
      {
        method: 'POST',
        body,
      }
  )
      .then((response) => response.ok ? onSuccess() : onFail('Данные не отправлены, попробуйте еще раз'))
      .catch(() => {
        onFail('Данные не отправлены, попробуйте еще раз');
      });
};
