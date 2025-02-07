import { useMediaQuery } from "@mui/material";
import { MenuTop } from "../../components/menu/MenuTop";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

export const HomeArea = () => {
  const lgScreen = useMediaQuery("(max-width:1500px)");
  const { userData, isLoadingUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && !userData?.email) {
      handleClickOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingUser]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseClick = () => {
    setOpen(false);
    navigate("/iniciar-sesion");
  };

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
            Perspectivas económicas 2025, banca popular y futuro digital
          </h2>
          <p className="text-black text-center mb-20">En Banco Azteca queremos tener un contacto más cercano con las entidades en las que tenemos presencia y qué mejor oportunidad que brindando información de valor a su comunidad periodística. </p>
          <p className="text-black text-center mb-20">Por ello nos complace ofrecer el seminario “Perspectivas económicas 2025, banca popular y futuro digital”, en el que destacados especialistas abordarán las complejidades del entorno económico; las oportunidades de desarrollo que esto traerá a nivel local y nacional; así como el alcance de la Inteligencia Artificial en la comunicación y el periodismo.</p>
          <p className="text-black text-center mb-20">Esperamos que este programa nos permita estrechar lazos a través del conocimiento.</p>
         <br></br>
         <p className="text-black text-center mb-20">Alejandro Valenzuela <br></br>
          Presidente del Consejo de Administración de Banco Azteca y Azteca Servicios Financieros</p>
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

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ fontSize: "1.2rem;" }}>
            {"Ingresa al evento"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ fontSize: "1.2rem;" }}
            >
              Los invitamos a sumarse a la transmisión en vivo- Seminario
              Perspectivas económicas, banca popular y futuro digital.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ color: "var(--tp-theme-1)" }}
              onClick={handleCloseClick}
            >
              Ingresa aquí
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
};
