export const TiposBasicos = () => {
  const nombre: string = "gustavo";
  const edad: number = 24;
  const staActive: boolean = true;
  const poderes: string[] = ["Velocidad", "Volar", "Respirar bajo el agua"];
  return (
    <>
      <h3>Tipos basicos</h3>
      {nombre}, {edad}, {{ staActive } ? "activo" : "inactivo"}
      <br />
      {poderes.join(",")}
    </>
  );
};
