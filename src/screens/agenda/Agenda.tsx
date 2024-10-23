import { MenuTop } from "../../components/menu/MenuTop";

export const Agenda = () => {
  return (
    <>
      <MenuTop
        styleMenu={{
          top: "0% ",
          left: "0% ",
        }}
      />

      <img
        src="/assets/img/agenda/Agenda_2.png"
        className="img-fluid agenda-image w-100 h-100 pt-20"
      />
    </>
  );
};
