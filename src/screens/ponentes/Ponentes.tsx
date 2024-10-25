/* eslint-disable @typescript-eslint/no-unused-vars */
import Grid from "@mui/material/Grid";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { useState } from "react";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

import "./ponentes.scss";
import { Dialog, DialogContent } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    margin: "6px",
  },
}));

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#006341",
    },
    secondary: {
      main: "#006341",
    },
  },
});

const itemData = [
  {
    id: 1,
    img: "/assets/img/ponentes/ponente1.png",
    name: "Jeanette Leyva",
    author: "Periodista",
    linkX: "https://twitter.com/JLeyvaReus",
    linkLin: "https://www.linkedin.com/in/jeanette-leyva-reus-4b658739/",
    imgDescription: "/assets/img/ponentes/description1.png",
  },
  {
    id: 2,
    img: "/assets/img/ponentes/ponente2.png",
    name: "Burger",
    author: "Comunicador, mercadólogo, investigador de cultura digital",
    linkX: "https://viniciuscovas.com/",
    linkLin: "https://www.linkedin.com/in/viniciuscovas/?locale=es_ES",
    imgDescription: "/assets/img/ponentes/description2.png",
  },
  {
    id: 3,
    img: "/assets/img/ponentes/ponente3.png",
    name: "Camera",
    author: "Periodista, abogado, escritor",
    linkX:
      "https://www.linkedin.com/in/rafael-alvarado-126158252/?originalSubdomain=mx",
    linkLin:
      "https://www.linkedin.com/in/luis-hern%C3%A1ndez-mart%C3%ADnez-a374774/",
    imgDescription: "/assets/img/ponentes/description3.png",
  },
  {
    id: 4,
    img: "/assets/img/ponentes/ponente4.png",
    name: "Coffee",
    author: "Psicólogo, investigador social",
    linkX:
      "https://www.linkedin.com/in/rafael-alvarado-126158252/?originalSubdomain=mx",
    linkLin: "https://bitacorasocial.com/inicio.html#",
    imgDescription: "/assets/img/ponentes/description4.png",
  },
];

export const Ponentes = () => {
  const expanded = false;
  const [open, setOpen] = useState(false);
  const handleOpen = (image: string) => {
    setImagePerson(image);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [imagePerson, setImagePerson] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className="ponentes_main">
        <div className="content-ponentes">
          <Grid container spacing={2}>
            {itemData.map(
              ({ img, name, author, id, linkX, linkLin, imgDescription }) => (
                <Grid
                  item
                  xl={3}
                  lg={3}
                  md={6}
                  xs={12}
                  style={{ gap: "1rem" }}
                  key={id}
                >
                  <Card sx={{ maxWidth: "100%", height: "100%" }}>
                    <CardHeader
                      sx={{
                        "& .MuiCardHeader-subheader": {
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        },
                      }}
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={<IconButton aria-label="settings"></IconButton>}
                      title={name}
                      subheader={author}
                    />
                    <CardMedia
                      component="img"
                      height="320"
                      image={img}
                      alt="Paella dish"
                    />

                    <CardActions disableSpacing>
                      <div className="container">
                        <a
                          className="mr-10"
                          aria-label="add to favorites"
                          href={linkX}
                          target="_blank"
                        >
                          <XIcon sx={{ color: "#006341" }} />
                        </a>
                        <a aria-label="share" href={linkLin} target="_blank">
                          <LinkedInIcon sx={{ color: "#006341" }} />
                        </a>
                      </div>
                      <ExpandMore
                        expand={expanded}
                        aria-expanded={expanded}
                        aria-label="show more"
                        onClick={() => handleOpen(imgDescription)}
                      >
                        <InfoIcon sx={{ color: "#006341" }} />
                      </ExpandMore>
                    </CardActions>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </div>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <img
            className="img-fluid"
            src={imagePerson}
            alt="paella"
            width="100%"
          />
        </DialogContent>
      </BootstrapDialog>
    </ThemeProvider>
  );
};
