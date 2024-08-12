import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import imagenUno from "../../assets/imgCarrusel/imagenUno.jpg";
import imagenDos from "../../assets/imgCarrusel/imagenDos.jpg";
import imagenTres from "../../assets/imgCarrusel/imagenTres.jpg";
import imagenCuatro from "../../assets/imgCarrusel/imagenCuatro.jpg";
import imagenCinco from "../../assets/imgCarrusel/imagenCinco.jpg";
import imagenSeis from "../../assets/imgCarrusel/imagenSeis.jpg";
import imagenSiete from "../../assets/imgCarrusel/imagenSiete.jpg"; 

function Carrusel() {

  return (
      <Carousel fade className="carousel">
  <Carousel.Item className="carouselItem">
    <img fluid src={imagenUno} alt="First slide" className="carousel-image" />
    <Carousel.Caption>
      <h3 className="fs-5 custom-italic text-black">Según la ciencia ser amante de los gatos es bueno para la mente y el cuerpo</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselItem">
    <img fluid src={imagenDos} alt="Second slide" className="carousel-image" />
    <Carousel.Caption>
      <h3 className="fs-5 custom-italic text-black">Son un antiestrés natural</h3>
      <p className="fs-5 custom-italic text-black">
        Los gatos estimulan nuestra sensibilidad y influencia al cerebro a
        liberar oxitocina, la hormona del bienestar. Lo logran a través de
        las vibraciones de sus ronroneos y su ruido, que actúa como ruido
        blanco, la suavidad de su pelo pero también con solo ser mirados.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselItem">
    <img fluid src={imagenTres} alt="Third slide" className="carousel-image" />
    <Carousel.Caption>
      <h3 className="fs-5 custom-italic text-black">Ayuda a controlar las enfermedades cardíacas, los accidentes cerebrovasculares y los ataques cardíacos</h3>
      <p className="fs-5 custom-italic text-black">
        Quien no vive con un gato tiene un 30-40% más de probabilidad de
        tener un infarto respecto de quien tiene un gato. El motivo se
        debe a la capacidad del ronroneo de generar un efecto
        vasodilatador, que mejora la circulación sanguínea.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselItem">
    <img fluid src={imagenCuatro} alt="Fourth slide" className="carousel-image" />
    <Carousel.Caption>
      <h3 className="fs-5 custom-italic text-black">Bajan la presión sanguínea</h3>
      <p className="fs-5 custom-italic text-black">
        Cuando una persona habla con su gato mantiene un tono de voz
        tranquilo y esto repercute en la presión sanguínea. La presencia de
        un gato lleva a un estado de paz tan profundo que logra bajar la
        presión sanguínea.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselItem">
    <img fluid src={imagenCinco} alt="Fifth slide" className="carousel-image" />
    <Carousel.Caption>
      <h3 className="fs-5 custom-italic text-black">Ayudan a dormir mejor</h3>
      <p className="fs-5 custom-italic text-black">
        El 41% de las personas que duermen con un gato tienen un sueño más
        profundo y más largo. Se debe al poder terapéutico relajante del
        ronroneo que hace el gato antes de quedarse dormido junto con
        nosotros.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselItem">
    <img fluid src={imagenSeis} alt="Sixth slide" className="carousel-image" />
    <Carousel.Caption>
      <h3 className="fs-5 custom-italic text-black">Hacen bien a nuestros huesos</h3>
      <p className="fs-5 custom-italic text-black">
        El ronroneo tiene una frecuencia sonora que va de 25 a 150
        Hertz(Hz), es decir, lo mismo que el ultrasonido que se utiliza en
        el ámbito médico para aumentar la densidad ósea, para tratar
        dolores óseos y musculares.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselItem">
    <img fluid src={imagenSiete} alt="Seventh slide" className="carousel-image" />
    <Carousel.Caption className="fs-5 custom-italic">
      <h3 className="fs-5 custom-italic text-black">Potencian nuestro sistema inmunitario</h3>
      <p className="fs-5 custom-italic text-black">
        Los gatos contribuyen a reducir en los niños un 50% el riesgo de
        contraer infecciones respiratorias y desarrollar alergias a los
        ácaros, al polvo, al pelo del animal y a los gérmenes. Esto se
        debe a la saliva de los gatos, que contiene proteínas que ayudan a
        nuestras defensas.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  
  )

}



export default Carrusel;