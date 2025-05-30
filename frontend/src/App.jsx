import { useEffect, useState } from 'react';
import CheckListForm from './components/CheckListForm';
import CheckListTable from './components/CheckListTable';
import * as api from './api';

function App() {
  const [listas, setListas] = useState([]);
  const [actual, setActual] = useState(null);

  const cargarListas = async () => {
    const data = await api.getListas();
    setListas(data);
  };

  useEffect(() => {
    cargarListas();
  }, []);

  const guardarLista = async (lista) => {
    if (lista.id) {
      const actualizada = await api.updateLista(lista);
      setListas(listas.map((l) => (l.id === lista.id ? actualizada : l)));
    } else {
      const nueva = await api.addLista(lista);
      setListas([...listas, nueva]);
    }
    setActual(null);
  };

  const eliminarLista = async (id) => {
    await api.deleteLista(id);
    setListas(listas.filter((l) => l.id !== id));
  };

  return (
    <div>
      <h1>Listas de Chequeo</h1>
      <CheckListForm onSave={guardarLista} current={actual} />
      <CheckListTable listas={listas} onEdit={setActual} onDelete={eliminarLista} />
    </div>
  );
}

export default App;
