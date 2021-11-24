
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
    } else {
      paginaRef.current--;
      alert("No hay mas registros");
    }
 };
  const paginaSiguiente=async()=>{
    paginaRef.current++;
    cargarUsuarios()
  }
  
  const paginaAnterior=async ()=>{
    if(paginaRef.current>1){
      paginaRef.current--;
      cargarUsuarios()
    }
  }
  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior
    
  };
};
