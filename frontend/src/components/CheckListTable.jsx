function CheckListTable({ listas, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Proyecto</th>
          <th>Estudiante</th>
          <th>Ítems</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {listas.map((lista) => (
          <tr key={lista.id}>
            <td>{lista.nombre_proyecto}</td>
            <td>{lista.nombre_estudiante}</td>
            <td>{lista.items.length}</td>
            <td>
              <button onClick={() => onEdit(lista)}>Editar</button>
              <button onClick={() => onDelete(lista.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CheckListTable;