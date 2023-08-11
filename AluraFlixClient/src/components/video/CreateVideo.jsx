import React, { useState } from "react";
import "./CreateVideo.css";

export default function CreateVideo() {
  const [titulo, setTitulo] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [imagenLink, setImagenLink] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [codigoSeguridad, setCodigoSeguridad] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleGuardar = () => {
    if (!titulo || !videoLink || !imagenLink || !categoria || !descripcion || !codigoSeguridad) {
      setFormSubmitted(true);
      return;
    }
    // Implementa la lógica para guardar los datos
  };

  const handleLimpiar = () => {
    setTitulo("");
    setVideoLink("");
    setImagenLink("");
    setCategoria("");
    setDescripcion("");
    setCodigoSeguridad("");
    setFormSubmitted(false);
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
            required
            placeholder="Título:"
            type="text"
            className={`custom-input ${formSubmitted && !titulo && "error"}`}
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <input
            required
            placeholder="Link del Video:"
            type="text"
            className={`custom-input ${formSubmitted && !videoLink && "error"}`}
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />

          <input
            required
            placeholder="Link de la Imagen del Video:"
            type="text"
            className={`custom-input ${formSubmitted && !imagenLink && "error"}`}
            value={imagenLink}
            onChange={(e) => setImagenLink(e.target.value)}
          />

          <select required
            className={`custom-input ${formSubmitted && !categoria && "error"}`}
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="" disabled>
              Escoja una Categoría
            </option>
            <option value="Back-end">Back-end</option>
            <option value="Front-end">Front-end</option>
          </select>

          <textarea 
            required
            placeholder="Descripción:"
            className={`custom-input textarea ${formSubmitted && !descripcion && "error"}`}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />

          <input
            required
            placeholder="Código de Seguridad:"
            type="text"
            className={`custom-input ${formSubmitted && !codigoSeguridad && "error"}`}
            value={codigoSeguridad}
            onChange={(e) => setCodigoSeguridad(e.target.value)}
          />
        </div>
        <div className="button_create">
          <div className="button_form">
            <button type="button" className="submit" onClick={handleGuardar}>
              Guardar
            </button>
            <button type="button" className="cleaning" onClick={handleLimpiar}>
              Limpiar
            </button>
          </div>
          <button type="button" className="submit" onClick={handleNuevaCategoria}>
            Nueva Categoría
          </button>
        </div>
      </form>
    </div>
  );
}
