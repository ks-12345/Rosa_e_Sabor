import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <h2>Dashboard</h2>

      <div className={styles.user}>
        👤 Administrador
      </div>
    </header>
  );
}