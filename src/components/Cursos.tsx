import React, { useEffect, useState } from 'react';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [carnet, setCarnet] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [seccion, setSeccion] = useState('');

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch('https://test-deploy-12.onrender.com/cursos');
        const data = await response.json();
        setCursos(data);
      } catch (error) {
        console.error('Error al cargar los cursos:', error);
      }
    };

    fetchCursos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ carnet, nombreCompleto, seccion });
  };

  return (
    <div>
      <h1>Cursos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre Curso"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Créditos"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descripcion"
          value={seccion}
          onChange={(e) => setSeccion(e.target.value)}
          required
        />
        <button type="submit">Guardar</button>
        <button type="submit">Limpiar</button>
      </form>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <h2>{curso.nombre}</h2>
            <p>Créditos: {curso.creditos}</p>
            <p>Descripción: {curso.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cursos;
