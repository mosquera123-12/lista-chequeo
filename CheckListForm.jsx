import { useState, useEffect } from 'react';

function CheckListForm({ onSave, currentList }) {
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [items, setItems] = useState([{ nombre: '', completado: false }]);

  useEffect(() => {
    if (currentList) {
      setNombreProyecto(currentList.nombre_proyecto);
      setNombreEstudiante(currentList.nombre_estudiante);
      setItems(currentList.items);
    }
  }, [currentList]);

  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index].nombre = value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { nombre: '', completado: false }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = {
      nombre_proyecto: nombreProyecto,
      nombre_estudiante: nombreEstudiante,
      items,
    };

    if (currentList) {
      onSave({ ...currentList, ...newList });
    } else {
      onSave(newList);
    }

    setNombreProyecto('');
    setNombreEstudiante('');
    setItems([{ nombre: '', completado: false }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del Proyecto"
        value={nombreProyecto}
        onChange={(e) => setNombreProyecto(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nombre del Estudiante"
        value={nombreEstudiante}
        onChange={(e) => setNombreEstudiante(e.target.value)}
        required
      />

      {items.map((item, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Ítem ${index + 1}`}
          value={item.nombre}
          onChange={(e) => handleItemChange(index, e.target.value)}
        />
      ))}
      <button type="button" onClick={handleAddItem}>Agregar Ítem</button>
      <button type="submit">{currentList ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
}

export default CheckListForm;