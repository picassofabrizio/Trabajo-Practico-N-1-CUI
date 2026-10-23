import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RestablecerScroll() {
    //las llaves { } sirven para extraer una propiedad de un objeto.
    //ese objeto lo devuelve useLocation().
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default RestablecerScroll;