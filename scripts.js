// Agregar cualquier código JavaScript necesario aquí
// Por ejemplo, código para validar el formulario antes de enviar la denuncia


// Cargar el archivo marcas.json
fetch('marcas.json')
  .then(response => response.json())
  .then(marcas => {
    // Obtener el elemento select y agregar las opciones de las marcas
    const selectMarca = document.getElementById('marca');
    marcas.forEach(marca => {
      const option = document.createElement('option');
      option.value = marca;
      option.text = marca;
      selectMarca.appendChild(option);
    });
  })
  .catch(error => console.error('Error al cargar el archivo marcas.json', error));

// Validar la fecha para que no sea una fecha pasada
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  const fecha = new Date(event.target.fecha.value);
  const now = new Date();
  if (fecha < now) {
    event.preventDefault();
    alert('La fecha de la denuncia no puede ser una fecha pasada.');
  }
});
