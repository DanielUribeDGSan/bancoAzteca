import { MenuTop } from "../../components/menu/MenuTop";
import { RotateVerticalPhone } from "../../components/ui/rotatePhone/RotateVerticalPhone";
import { useUser } from "../../hooks/useUser";
// import LiveUsersCounter from "./LiveUsersCounter";

export const LiveArea = () => {
  const { userData, isLoadingUser } = useUser();

  return (
    <>
      {/* <LiveUsersCounter /> */}
      <RotateVerticalPhone />
      <MenuTop
        className="menuTopMovilLeft"
        styleMenu={{
          top: "1%",
          zIndex: 999,
          left: "0%",
          justifyContent: "flex-start",
        }}
      />

      <div className="container-iframe">
        {!isLoadingUser && (
          <iframe
            className="responsive-iframe"
            allowFullScreen
            src={`https://evento-banco-azteca.netlify.app/players/index.html?user=${userData.fullName}&email=${userData?.email}`}
            // src={`http://localhost:5173/players/index.html?user=${userData.fullName}&email=${userData?.email}`}
          ></iframe>
        )}
      </div>
    </>
  );
};
