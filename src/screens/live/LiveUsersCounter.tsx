import { useState, useEffect } from "react";

import {
  doc,
  onSnapshot,
  setDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

const LiveUsersCounter = () => {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const userId = Date.now().toString();

    const userDoc = doc(db, "col-sala/azteca2/col-usuarios-count", userId);
    const viewersCollection = collection(
      db,
      "col-sala/azteca2/col-usuarios-count"
    );

    const registerUser = async () => {
      await setDoc(userDoc, {
        timestamp: Date.now(),
        active: true,
      });
    };

    const unsubscribe = onSnapshot(viewersCollection, (snapshot) => {
      setViewers(snapshot.docs.length);
    });

    registerUser();

    const handleUserExit = () => {
      deleteDoc(userDoc);
    };

    window.addEventListener("beforeunload", handleUserExit);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        handleUserExit();
      } else {
        registerUser();
      }
    });

    return () => {
      unsubscribe();
      handleUserExit();
      window.removeEventListener("beforeunload", handleUserExit);
    };
  }, []);

  return (
    <div>
      <h3
        className="position-absolute top-0 ring-0 z-10"
        style={{ position: "absolute", top: 0, zIndex: 10 }}
      >
        Usuarios conectados: {viewers}
      </h3>
    </div>
  );
};

export default LiveUsersCounter;
