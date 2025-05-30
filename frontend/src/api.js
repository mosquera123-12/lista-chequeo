const API_URL = 'http://localhost:3001/listas'; // Cambiar por tu API en Render si está desplegado

export const getListas = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addLista = async (lista) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lista),
  });
  return res.json();
};

export const updateLista = async (lista) => {
  const res = await fetch(`${API_URL}/${lista.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lista),
  });
  return res.json();
};

export const deleteLista = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};