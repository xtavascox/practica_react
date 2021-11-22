import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/requestRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    //llamado al API
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      paginaRef.current++;
    } else {
      alert("No hay mas registros");
    }

    setUsuarios(resp.data.data);
  };

  return {
    usuarios,
    cargarUsuarios,
  };
};
