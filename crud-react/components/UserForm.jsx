import { useState, useEffect } from 'react';

function UserForm({ onAdd, onUpdate, editingUser }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setNombre(editingUser.nombre);
      setEmail(editingUser.email);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email) return;

    const user = { nombre, email };

    if (editingUser) {
      onUpdate({ ...editingUser, ...user });
    } else {
      onAdd(user);
    }

    setNombre('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{editingUser ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default UserForm;