import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const navigate = useNavigate();

  function entrar() {
    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>🌹 Rosa & Sabor</h1>

        <p>Sistema de Gestão</p>

        <input
          type="text"
          placeholder="Usuário"
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Senha"
          className={styles.input}
        />

        <button
          onClick={entrar}
          className={styles.button}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}