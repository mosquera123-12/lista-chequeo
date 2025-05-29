document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!nombre || !email || !password) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Correo electrónico no válido.');
    return;
  }

  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  document.getElementById('mensaje').textContent = `¡Bienvenido, ${nombre}! Registro completado.`;

  // Limpia el formulario
  this.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}