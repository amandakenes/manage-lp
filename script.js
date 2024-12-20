document.getElementById('newsletter-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');

  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailValue) {
    errorMessage.textContent = 'É necessário informar um e-mail';
  } else if (!emailPattern.test(emailValue)) {
    errorMessage.textContent = 'Informe um e-mail válido';
  } else {
    errorMessage.textContent = '';
    alert('Solicitação concluída com sucesso!');
  }
});
