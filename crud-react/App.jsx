import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';
import * as api from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const loadUsers = async () => {
    const data = await api.getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAddUser = async (user) => {
    const newUser = await api.addUser(user);
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = async (user) => {
    const updated = await api.updateUser(user);
    setUsers(users.map((u) => (u.id === updated.id ? updated : u)));
    setEditingUser(null);
  };

  const handleDeleteUser = async (id) => {
    await api.deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD con JSON Server</h1>
      <UserForm
        onAdd={handleAddUser}
        onUpdate={handleUpdateUser}
        editingUser={editingUser}
      />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}

export default App;