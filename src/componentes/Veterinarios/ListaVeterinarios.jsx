import React, { useState } from "react";
import "./Veterinarios.css";
import Veterinario from "./Veterinario";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListaVeterinarios = () => {
  const [veterinarios, setVeterinarios] = useState([
    {
      id: 1,
      nombre: "Centro Médico Veterinario Centenario",
      especialidad: "Cardiología",
      direccion: "Av. Warnes 59",
      telefono: "011-45877059 1160582655",
      horarios: "24 horas",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 2,
      nombre: "Veterinaria Budhapets",
      especialidad: "Dermatología",
      direccion: "Av. Tte. Gral. Donato Álvarez 2.077",
      telefono: "011-51799970 011-4583-5595",
      horarios: "24 horas",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 3,
      nombre: "Veterinaria Merlí",
      especialidad: "Oftalmología",
      direccion: "Coronel Apolinario Figueroa 299",
      telefono: "011-32330666",
      horarios:
        "Lunes a Sábado de 09:00 a 21:00 hs. Domingo de 10:00 a 20:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 4,
      nombre: "Las Mascotas de Fede",
      especialidad: "General",
      direccion: "Gurruchaga 632",
      telefono: "011-48553969",
      horarios: "Lunes a Sábado de 10:00 a 19:30 hs",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 5,
      nombre: "Veterinaria Pacalú",
      especialidad: "General",
      direccion: "Coronel Apolinario Figueroa 299",
      telefono: "011-32330666",
      horarios:
        "Lunes a Sábado de 09:00 a 21:00 hs. Domingo de 10:00 a 20:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 6,
      nombre: "Tu Mascota Veterinaria",
      especialidad: "General",
      direccion: "Luis Viale 181",
      telefono: "011-48550018",
      horarios: "Lunes a Sábado de 09:00 a 20:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 7,
      nombre: "Veterinaria Karmin",
      especialidad: "General",
      direccion: "Av. Corrientes 5.726",
      telefono: "011-48579111",
      horarios:
        "Lunes a Sábado de 09:00 a 20:00 hs. Sábado de 09:00 a 19:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 8,
      nombre: "Veterinaria Alem",
      especialidad: "General",
      direccion: "Thames 575",
      telefono: "011-48548509",
      horarios:
        "Lunes a Sábado de 09:30 a 20:00 hs. Domingo de 09:30 a 19:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 9,
      nombre: "Veterinaria Online",
      especialidad: "General",
      direccion: "Gurruchaga y Juan Ramírez de Velasco",
      telefono: "11 27098928",
      horarios: "Lunes a Sábado de 11:00 a 19:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 10,
      nombre: "Sebastián Veterinaria",
      especialidad: "General",
      direccion: "Av. Corrientes 5.139",
      telefono: "011-48551849",
      horarios:
        "Lunes a Viernes de 10:00 a 14:00 y de 15:00 a 20:00 hs. Sábado de 10:00 a 19:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 11,
      nombre: "Clínica Veterinaria Pet's",
      especialidad: "General",
      direccion: "Av. Córdoba 4.416",
      telefono: "011-47778877",
      horarios:
        "Lunes a Viernes de 10:00 a 18:30 hs. Sábado de 10:30 a 14:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 12,
      nombre: "Veterinaria Jaiot",
      especialidad: "General",
      direccion: "Camargo 845",
      telefono: "011-48559868",
      horarios:
        "Lunes a Viernes de 09:30 a 13:00 y de 16:30 a 19:30 hs. Sábado de 09:30 a 13:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 13,
      nombre: "Clínica Veterinaria Villa Crespo",
      especialidad: "General",
      direccion: "Camargo 572",
      telefono: "011-48544488",
      horarios:
        "Lunes a Viernes de 10:00 a 19:00 hs. Sábado de 10:00 a 17:00 hs.",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 14,
      nombre: "Centro diagnostico Plaza",
      especialidad: "Diagnostico por imagen",
      direccion: "Pareja 3088 (Villa Pueyrredon)",
      telefono: "11 64490999 6091-4554",
      horarios:
        "Solcitar turno",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 15,
      nombre: "Veterinaria a domicilio",
      especialidad: "General",
      direccion: "GBA sur, norte y oeste. CABA",
      telefono: "11 64490999 6091-4554",
      horarios:
        "Solciitar turno",
      mostrarData: false,
      esFavorito: false,
    },
    {
      id: 16,
      nombre: "Radiología Veterinaria a domicilio o en consultorio",
      especialidad: "Radiología",
      direccion: "GBA sur, norte y oeste. CABA",
      telefono: "11 64490999 6091-4554",
      horarios:
        "Solciitar turno y cotización",
      mostrarData: false,
      esFavorito: false,
    },
  ]);

  const [seleccionarVeterinario, setSeleccionarVeterinario] = useState(null);

  const toggleData = (veterinario) => {
    setSeleccionarVeterinario(veterinario);
  };

  const toggleFavorito = (id) => {
    setVeterinarios(
      veterinarios.map((veterinario) =>
        veterinario.id === id
          ? { ...veterinario, esFavorito: !veterinario.esFavorito }
          : veterinario
      )
    );
  };

  const closeModal = () => {
    setSeleccionarVeterinario(null);
  };

  const veterinariosFavoritos = veterinarios.filter(
    (veterinario) => veterinario.esFavorito
  );

  return (
    <Container className="containerVeterinario p-4 shadow-lg p-3 mb-5 rounded;" style={{ width: "100%" }}>
      <div className="text-center mb-4">
        <h1 className="text-center text-danger mb-2">Veterinarias 24 horas en Villa Crespo</h1>
        <span className="text-center fs-5">
          A continuación vas a encontrar el horario del resto de las
          Veterinarias de Villa Crespo.
          Antes de ir te recomendamos llamar para confirmar que la Veterinaria
          está de Guardia o tiene turno disponible.
        </span>
      </div>

      <Row className="justify-content-center d-flex flex-column align-items-center">
        {veterinarios.map((veterinario) => (
          <Col key={veterinario.id} md={8} lg={7} className="d-flex">
            <Veterinario
              key={veterinario.id}
              veterinario={veterinario}
              onToggleData={toggleData}
              onToggleFavorito={toggleFavorito}
            />
          </Col>
        ))}
      </Row>

      {seleccionarVeterinario && (
        <Modal show={true} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{seleccionarVeterinario.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Especialidad:</strong>{" "}
              {seleccionarVeterinario.especialidad}
            </p>
            <p>
              <strong>Dirección:</strong> {seleccionarVeterinario.direccion}
            </p>
            <p>
              <strong>Teléfono:</strong> {seleccionarVeterinario.telefono}
            </p>
            <p>
              <strong>Horarios:</strong> {seleccionarVeterinario.horarios}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <Row className="mt-5">
        <Col>
          <h2 className="text-center text-danger">Favoritos</h2>
          {veterinariosFavoritos.length > 0 ? (
            veterinariosFavoritos.map((veterinario) => (
              <Veterinario
                key={veterinario.id}
                veterinario={veterinario}
                onToggleFavorito={toggleFavorito}
                onToggleData={toggleData} // Agregar esta línea si es necesaria en Veterinario
              />
            ))
          ) : (
            <p className="fs-5 text-center">No hay veterinarios favoritos seleccionados.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ListaVeterinarios;