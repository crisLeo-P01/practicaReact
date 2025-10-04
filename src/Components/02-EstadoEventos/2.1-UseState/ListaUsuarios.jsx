import { useState } from "react";

const ListaClientes = () => {
  const [lista, setLista] = useState([]);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const hobbiesDisponibles = [
    "Leer",
    "Correr",
    "Programar",
    "Cocinar",
    "Viajar",
  ];

  const manejarCheckbox = (hobbie) => {
    if (hobbies.includes(hobbie)) {
      // si ya estaba seleccionado, lo quito
      setHobbies(hobbies.filter((h) => h !== hobbie));
    } else {
      // si no estaba, lo agrego
      setHobbies([...hobbies, hobbie]);
    }
  };

  const IngresarUsuario = () => {
    if (
      nombre.trim() === "" ||
      edad.trim() === "" ||
      ciudad.trim() === "" ||
      hobbies.length === 0
    ) {
      alert("Por favor completa todos los campos y selecciona al menos un hobbie");
      return;
    }

    const nuevoUsuario = {
      id: lista.length + 1,
      nombre,
      edad,
      ciudad,
      hobbies,
    };

    setLista([...lista, nuevoUsuario]);

    // reset inputs
    setNombre("");
    setEdad("");
    setCiudad("");
    setHobbies([]);
  };

  return (
    <div>
      <h3>Lista de usuarios con sus hobbies</h3>

      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ingresa tu edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ingresa tu ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />

      <h4>Selecciona tus hobbies:</h4>
      {hobbiesDisponibles.map((hobbie, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={hobbie}
            checked={hobbies.includes(hobbie)}
            onChange={() => manejarCheckbox(hobbie)}
          />
          {hobbie}
        </label>
      ))}

      <p>Hobbies seleccionados: {hobbies.join(", ")}</p>

      <button onClick={IngresarUsuario}>Ingresar usuario</button>

      <hr />

      <ul>
        {lista.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.nombre}</strong> ({usuario.edad} años,{" "}
            {usuario.ciudad}) - Hobbies: {usuario.hobbies.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaClientes;
