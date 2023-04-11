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
// Cargar el archivo marcas.json y modelos.json con lógica para filtrar al momento de seleccionar una marca
const marcas = document.getElementById('marca');
const modelos = document.getElementById('modelo');

marcas.addEventListener('change', (event) => {
    const selectedMarca = event.target.value;
    const options = modelos.options;

    // Remove all previous options
    while (options.length > 0) {
        options.remove(0);
    }

    // Add new options based on selected marca
    const modelosByMarca = modelosPorMarca[selectedMarca];
    modelosByMarca.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo;
        option.text = modelo;
        modelos.add(option);
    });
});

// Load modelos by marca when page is loaded
const modelosPorMarca = fetch('modelos.json')
  .then(response => response.json())
  .then(data => {
    modelosPorMarca = data;
  });


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
