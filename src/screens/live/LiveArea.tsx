import { RotateVerticalPhone } from "../../components/ui/rotatePhone/RotateVerticalPhone";
import { useUser } from "../../hooks/useUser";

export const LiveArea = () => {
  const { userData, isLoadingUser } = useUser();

  return (
    <>
      <RotateVerticalPhone />

      <div className="container-iframe">
        {!isLoadingUser && (
          <iframe
            className="responsive-iframe"
            allowFullScreen
            src={`https://evento-banco-azteca.netlify.app/players/index.html?user=${userData.fullName}&email=${userData?.email}`}
          ></iframe>
        )}
      </div>
    </>
  );
};
