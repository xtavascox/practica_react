import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginPyload = {
  username: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPyload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "abc123",
        nombre,
        username,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, username }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { nombre: "gustavo", username: "frus" },
    });
  };

  const logout=()=>{
      dispatch({type:'logout'})
  }

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Autenticando</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      {token ? (
        <div className="alert alert-success">Autenticado como:{username}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
