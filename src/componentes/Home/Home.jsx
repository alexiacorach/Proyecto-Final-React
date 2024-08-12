import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import imagenUno from "../../assets/imgCarrusel/imagenUno.jpg";
import imagenDos from "../../assets/imgCarrusel/imagenDos.jpg";
import imagenTres from "../../assets/imgCarrusel/imagenTres.jpg";
import imagenCuatro from "../../assets/imgCarrusel/imagenCuatro.jpg";
import imagenCinco from "../../assets/imgCarrusel/imagenCinco.jpg";
import imagenSeis from "../../assets/imgCarrusel/imagenSeis.jpg";
import imagenSiete from "../../assets/imgCarrusel/imagenSiete.jpg";
import Carrusel from "./Carrusel.jsx";
import Container from "react-bootstrap/Container";
import React, { useEffect } from 'react';


function Home() {

  return (
    <div className="bodyhome">
      <section className="objetivos">
        <h1 className="text-danger text-center mb-4 wow animate__animated animate__fadeIn">
          ¡BIENVENIDOS A LA PÁGINA  N° 1 EN FELINOS!
        </h1>
        <Carrusel className="carousel-container" />
        <p className="fs-5 custom-italic p-5 pb-0">
          Somos amantes de los animales y queremos compartir nuestra sabiduría
          sobre los gatos para ayudar a las personas que busca adoptar un nuevo
          integrante en la familia. Te invitamos a conocer el mundo de estos
          animales tan especiales que hacen de nuestro mundo un espacio mas
          confortable ¡Esperamos que la información de la web te sea útil y
          podamos ayudarte a cuidar a tu mascota!
        </p>
      </section>

      <section className="boxmodel">
        <div className="boxmodel1">
          <h2>Historia y Orígenes</h2>
          <p className="fs-5 custom-italic">
            Los gatos comparten un antepasado común probablemente relacionado
            con los Aitanis. Los Aitanis era pequeños carnívoros de los bosques
            que aparecieron hace alrededor de 60 millones de años. Tenían un
            cuerpo alargado y una larga cola.
            <br />
            Se cree que la domesticación del gato comenzó entre el 7500 a. C. y
            el 7000 a. C. y la manera fue cambiando de una época a otra, desde
            el Antiguo Egipto cuando era venerado como un Dios, hasta la Edad
            Media cuando los quemaban en las hogueras, pensando que era un
            animal diabólico. Los antiguos egipcios usaban para llamar al gato
            la onomatopeya «miu».
            <br />
            Con el tiempo se convirtió en un animal de compañía gracias a su
            dulzura, su gracia y su indolencia, aunque también por ser un animal
            protector. Al cazar pequeños roedores y serpientes, protegía los
            silos donde los egipcios guardaban su cosecha y eliminaba un vector
            de enfermedades graves, haciendo más seguros los alrededores de los
            hogares próximos a donde establece su territorio. Antes, los
            sacerdotes consagraban sus atenciones al león, pero este era grande
            y feroz, y el gato no tuvo problemas para imponerse, ya que se
            mostraba al menos más dócil. Poco a poco el pequeño felino fue
            acercandose, se dejaba incluso acariciar y fue aceptando cada vez
            mejor al hombre.
          </p>
        </div>
        <div className="boxmodel2">
          <h2>¿Qué hay que tener en cuenta al adoptar un gatito?</h2>
          <p className="fs-5 custom-italic">
            Antes de adoptar un gatito debes pensar muy bien e incluir a todos
            los miembros de la familia en tu decisión: ¿están todos de acuerdo
            con tener un pequeño felino en casa? ¿Tenés suficiente tiempo y
            espacio disponible? Si vivís en una vivienda de alquiler, ¿está
            permitido tener animales domésticos? Si tu gatito pasa tiempo fuera
            es importante saber si a los vecinos les gustan los gatos, pues
            puede que, de vez en cuando, busque otros espacios donde no sabemos
            si son bien bienvenidos.
          </p>
          <p className="fs-5 custom-italic">
            ¿Queres un gato de raza o uno de los muchos gatitos que hay en las
            protectoras de animales en busca de un hogar? ¿Tienes los medios
            económicos para asumir los costes veterinarios, que no deben
            subestimarse? ¿Quién se ocupará del minino durante las vacaciones?
            Son todas cuestiones que deben resolverse antes de adoptar uno.
            Encontraras en esta página información últi sobre las razas y
            enlaces sobre lugares de adopción.
          </p>
        </div>
      </section>

      <aside className="sugerencias">
        <h3>Libros Útiles</h3>
        <div className="listaLibros">
          <ul>
            <li className="link-danger fs-6">Soy un gato, de Soseki Natsume (Editorial Impedimenta)</li>
            <li className="link-danger fs-6">Podría hacer pis aquí, Francesco Marciuliano</li>
            <li className="link-danger fs-6">Elogio del gato, de Stephanie Hochet (Periférica ed.)</li>
            <li className="link-danger fs-6">Gatos ilustres, de Doris Lessing (editorial Lumen)</li>
            <li className="link-danger fs-6">
              Cómo saber si tu gato planea matarte, de The Oatmeal (editorial
              Astiberri)
            </li>
          </ul>
        </div>
        <h3>Enlaces Útiles</h3>
        <div className="listaLibros">
          <ul>
            <li>
              <a className="link-danger fs-6" href="https://www.cosasdegatos.es/curiosidades-gatos/que-es-bolsa-primordial-gatos">
                ¿Qué tiene mi gato en la panza?
              </a>
            </li>
            <li>
              <a className="link-danger fs-6" href="https://www.cosasdegatos.es/enfermedades-salud-gatos/gatos-estres-sintomas-tratamiento">
                Gatos y estrés
              </a>
            </li>
            <li>
              <a className="link-danger fs-6" href="https://purina.com.mx/purina/gatos/vacunas-para-gato">
                Vacunar a mi gato
              </a>
            </li>
            <li>
              <a className="link-danger fs-6" href="https://www.instagram.com/cat.cafe.buenosaires/?hl=es">
                Café con gatos, una opción diferente
              </a>
            </li>
            <li>
              <a className="link-danger fs-6" href="https://www.veterinarias.com.ar/refugios-adopcion-animales.html">
                Refugios y centros de adopción
              </a>
            </li>
          </ul>
        </div>
      </aside>


    </div>
  );
}

export default Home;