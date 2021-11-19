interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}
interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "gustavo",
    edad: 35,
    direccion: {
      pais: "colombia",
      casaNo: 20,
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
