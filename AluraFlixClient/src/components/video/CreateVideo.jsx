import React, { useState } from "react";
import "./CreateVideo.css";

export default function CreateVideo() {
  const [titulo, setTitulo] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [imagenLink, setImagenLink] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [codigoSeguridad, setCodigoSeguridad] = useState("");

  const handleGuardar = () => {
    // Implementa la lógica para guardar los datos
  };

  const handleLimpiar = () => {
    setTitulo("");
    setVideoLink("");
    setImagenLink("");
    setCategoria("");
    setDescripcion("");
    setCodigoSeguridad("");
  };

  const handleNuevaCategoria = () => {
    // Implementa la lógica para agregar una nueva categoría
  };

  return (
    <div className="create_video_container">
      <h2>Nuevo Video</h2>
      <form>
        <div className="form_create">
          <input
            placeholder="Título:"
            type="text"
            className="custom-input"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <input
            placeholder="Link del Video:"
            type="text"
            className="custom-input"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />

          <input
            placeholder="Link de la Imagen del Video:"
            type="text"
            className="custom-input"
            value={imagenLink}
            onChange={(e) => setImagenLink(e.target.value)}
          />

          <select
            className="custom-input"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option selected disabled>
              Escoja una Categoría
            </option>
            <option value="Back-end">Back-end</option>
            <option value="Front-end">Front-end</option>
          </select>

          <textarea
            placeholder="Descripción:"
            className="custom-input textarea"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <input
            placeholder="Código de Seguridad:"
            type="text"
            className="custom-input"
            value={codigoSeguridad}
            onChange={(e) => setCodigoSeguridad(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleGuardar}>
          Guardar
        </button>
        <button type="button" onClick={handleLimpiar}>
          Limpiar
        </button>
        <button type="button" onClick={handleNuevaCategoria}>
          Nueva Categoría
        </button>
      </form>
    </div>
  );
}
