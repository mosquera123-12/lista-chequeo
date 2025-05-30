import { useState, useEffect } from 'react';

function CheckListForm({ onSave, current }) {
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [items, setItems] = useState([{ nombre: '', completado: false }]);

  useEffect(() => {
    if (current) {
      setNombreProyecto(current.nombre_proyecto);
      setNombreEstudiante(current.nombre_estudiante);
      setItems(current.items);
    }
  }, [current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: current?.id,
      nombre_proyecto: nombreProyecto,
      nombre_estudiante: nombreEstudiante,
      items,
    });
    setNombreProyecto('');
    setNombreEstudiante('');
    setItems([{ nombre: '', completado: false }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del proyecto"
        value={nombreProyecto}
        onChange={(e) => setNombreProyecto(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nombre del estudiante"
        value={nombreEstudiante}
        onChange={(e) => setNombreEstudiante(e.target.value)}
        required
      />
      {items.map((item, i) => (
        <input
          key={i}
          placeholder={`Ítem ${i + 1}`}
          value={item.nombre}
          onChange={(e) => {
            const newItems = [...items];
            newItems[i].nombre = e.target.value;
            setItems(newItems);
          }}
        />
      ))}
      <button type="button" onClick={() => setItems([...items, { nombre: '', completado: false }])}>
        Agregar Ítem
      </button>
      <button type="submit">{current ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
}

export default CheckListForm;