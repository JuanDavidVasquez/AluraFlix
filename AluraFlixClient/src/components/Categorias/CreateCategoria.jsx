import React, { useState } from "react";
import "../video/CreateVideo.css";
import axios from "axios";

export default function CreateCategoria() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color: "",
    codigoCategorias: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/categoria-save", formData)
      .then((response) => {
        // Aquí puedes manejar la respuesta del servidor si es necesario
        console.log(response.data);
      })
      .catch((error) => {
        // Aquí puedes manejar los errores en caso de que ocurran
        console.error(error);
      });
  };

  return (
    <div className="create_video_container">
      <h2>CreateCategoria</h2>
      <form onSubmit={handleSubmit}>
        <div className="form_create">
          <input
            placeholder="Nombre"
            className="custom-input"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />

          <textarea
            placeholder="Description"
            className="custom-input"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />

          <input
            className="custom-input"
            type="color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            required
          />
          <input
          className="custom-input"
            placeholder="Codigo Categorias"
            type="text"
            id="codigoCategorias"
            name="codigoCategorias"
            value={formData.codigoCategorias}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}
