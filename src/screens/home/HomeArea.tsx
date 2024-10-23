import { useMediaQuery } from "@mui/material";
import { MenuTop } from "../../components/menu/MenuTop";

export const HomeArea = () => {
  const lgScreen = useMediaQuery("(max-width:1500px)");

  return (
    <>
      <section className="home_main">
        <MenuTop />

        <div className="content w-100 h-auto">
          {lgScreen && (
            <>
              <div className="content-logo">
                <img
                  className="img-fluid logo"
                  src="./assets/img/logos/LOGO_BAZ.png"
                  alt="danone"
                />
              </div>
              <div className="content-date">
                <span>Jueves 7 de noviembre</span>
                <span>09:45 am.</span>
              </div>
            </>
          )}
          <h1 className="h1 text-black text-center">Seminario</h1>
          <h2 className="h1 text-black text-center mb-20">
            Perspectivas económicas, banca popular y futuro digital
          </h2>
          <p className="text-black text-center mb-20">
            Para Banco Azteca es de suma relevancia estar cerca de las
            comunidades en las que tenemos presencia, por lo que nos complace
            ofrecer el seminario “Perspectivas económicas, banca popular y
            futuro digital”. Destacados especialistas revisarán las
            oportunidades de crecimiento, tanto de nuestro país, como para
            Puebla, entidad clave en nuestra tarea de inclusión financiera.
            Adicionalmente, ofreceremos una perspectiva de la banca popular, y
            nos asomaremos a las transformaciones sociales que las nuevas
            tecnologías digitales traen consigo en áreas tan importantes como la
            comunicación y el periodismo. Estoy seguro de que esta será una gran
            oportunidad para propiciar una mayor integración y crecimiento.
          </p>
          <ul>
            <li className="text-black text-center">Tonatiuh Rodríguez</li>
            <li className="text-black text-center">Director General </li>
            <li className="text-black text-center">Banco Azteca</li>
          </ul>
        </div>
        {!lgScreen && (
          <>
            <div className="content-logo">
              <img
                className="img-fluid logo"
                src="./assets/img/logos/LOGO_BAZ.png"
                alt="danone"
              />
            </div>
            <div className="content-date">
              <span>Jueves 7 de noviembre</span>
              <span>09:45 am.</span>
            </div>
          </>
        )}
      </section>
    </>
  );
};
