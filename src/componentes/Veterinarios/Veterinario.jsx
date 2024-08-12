import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Veterinario = ({ veterinario, onToggleData, onToggleFavorito }) => {
  return (
    <Card className="text-center mb-3 shadow-sm p-3 mb-5 bg-white rounded " style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>{veterinario.nombre}</Card.Title>
        <Card.Text>
          <span className="custom-italic fs-5">Especialidad: {veterinario.especialidad}</span>
        </Card.Text>
        <Button variant="danger" className="fs-9 m-2" onClick={() => onToggleData(veterinario)}>
          Ver Más Información
        </Button>
        <Button
          variant="danger"
          onClick={() => onToggleFavorito(veterinario.id)}
          className="ml-2"
        >
          {veterinario.esFavorito
            ? "Eliminar de Favoritos"
            : "Agregar a Favoritos"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Veterinario;
