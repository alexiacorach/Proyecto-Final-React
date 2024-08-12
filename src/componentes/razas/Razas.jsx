import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Razas.css";

// Configuración de axios
axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = "DEMO-API-KEY";

const Razas = () => {
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await axios.get("/breeds");
        setBreeds(res.data);
      } catch (e) {
        console.error("Error fetching breeds", e);
      }
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    const loadBreedImages = async () => {
      if (selectedBreed) {
        try {
          const res = await axios.get(
            `/images/search?breed_ids=${selectedBreed}&limit=1`
          );
          setImages(res.data);
        } catch (e) {
          console.error("Error fetching breed images", e);
        }
      }
    };

    loadBreedImages();
  }, [selectedBreed]);

  const handleBreedSelectChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const selectedBreedData = breeds.find(breed => breed.id === selectedBreed);

  return (
    <div className="bodyhome-razas b-1">
      <h2 className="text-danger text-center">
        ¡Bienvenido al crisol de razas felinas del mundo!
      </h2>
      <span className="fs-5">
        Queremos estar seguros de que al elegir un gato le pueda brindar un
        estilo de vida adecuado según sus características. A continuación
        podrá ver cada una de las razas felinas con sus características
        principales, su origen y temperamento. Consideramos útil leer esta
        información con atención antes de tomar una decisión. Lo importante es
        que su gato y usted tengan una calidad de vida óptima y puedan ser
        grandes amigos!<br />
        Sin embargo, sabemos que en el mundo existen millones de gatos que
        habitan en la calle en condiciones que ponen en riesgo su vida. Desde
        Tienda de gatos impulsamos el cuidado de los mismos y la posible
        adopción.
      </span>

      <h4 className="text-muted p-2">
        Haga clic para seleccionar una raza:
      </h4>

      <Card>
        <Card.Body>
          <Form.Select
            className="selector-Razas"
            value={selectedBreed || ""}
            onChange={handleBreedSelectChange}
          >
            <option value="" disabled>Seleccione una raza</option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </Form.Select>
          {images.map((image) => (
            <Card.Img className="cat-image" alt="" src={image.url} key={image.id} />
          ))}
          {selectedBreedData && (
            <div className="breed-details">
              <h2 className="fs-2 text-danger">Descripción:</h2>
              <p className="fs-5">{selectedBreedData.description}</p>
              <h2 className="fs-2 text-danger">Orígenes:</h2>
              <p className="fs-5">{selectedBreedData.origin}</p>
              <h2 className="fs-2 text-danger">Temperamento:</h2>
              <p className="fs-5">{selectedBreedData.temperament}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Razas;