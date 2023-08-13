import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CreateVideo.css";
import { NavLink } from 'react-router-dom';

export default function CreateVideo() {
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [imagenLink, setImagenLink] = useState("");
  const [categoria, setCategoria] = useState("");
  const [description, setDescription] = useState("");
  const [codigo, setCodigo] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [caregoriasData, setCategoriasData] =useState([]);


   
    const fetchCategorias = () => {
      axios
        .get("http://127.0.0.1:8000/api/categorias")
        .then((response) => {
          setCategoriasData(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener datos:", error);
        });
    };
useEffect(()=>{
  fetchCategorias();
},[]);

  const handleGuardar = () => {
    if (!title || !videoLink || !imagenLink || !categoria || !description || !codigo) {
      setFormSubmitted(true);
      return;
    }

    const formData = {
      title,
      description,
      link: videoLink,
      categoria,
      codigo,
      imagen: imagenLink,
    };

    axios.post("http://127.0.0.1:8000/api/video-save", formData)
      .then((response) => {
        // Maneja la respuesta aquí si es necesario
        console.log("Video guardado con éxito:", response.data);
        // Limpia el formulario
        handleLimpiar();
      })
      .catch((error) => {
        console.error("Error al guardar el video:", error);
      });
  };

  const handleLimpiar = () => {
    setTitle("");
    setVideoLink("");
    setImagenLink("");
    setCategoria("");
    setDescription("");
    setCodigo("");
    setFormSubmitted(false);
  };



  return (
    <div className="create_video_container">
      <h2>Nuevo Video</h2>
      <form>
        <div className="form_create">
          <input
            required
            placeholder="Título"
            type="text"
            className={`custom-input ${formSubmitted && !title && "error"}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            required
            placeholder="Link del Video"
            type="text"
            className={`custom-input ${formSubmitted && !videoLink && "error"}`}
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />

          <input
            required
            placeholder="Link de la Imagen del Video"
            type="text"
            className={`custom-input ${formSubmitted && !imagenLink && "error"}`}
            value={imagenLink}
            onChange={(e) => setImagenLink(e.target.value)}
          />

          <select
          required
          className={`custom-input ${formSubmitted && !categoria && "error"}`}
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="" disabled>
            Escoja una Categoría
          </option>
          {caregoriasData.map((categoria) => (
            <option key={categoria.id} value={categoria.title}>
              {categoria.title}
            </option>
          ))}
        </select>


          <textarea
            required
            placeholder="Descripción"
            className={`custom-input textarea ${formSubmitted && !description && "error"}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            required
            placeholder="Código de Seguridad"
            type="text"
            className={`custom-input ${formSubmitted && !codigo && "error"}`}
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
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
          <button type="button"  className="submit">
          <NavLink to="/create-categoria">Nueva Categoría</NavLink> 
          </button>
        </div>
      </form>
    </div>
  );
}
