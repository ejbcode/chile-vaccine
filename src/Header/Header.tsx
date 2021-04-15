import styles from "./Header.module.scss";

const App: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Chile Vacuna</h1>
          <p>
            Consulta en tiempo real las vacunas contra el Covid-19 que se
            aplicaron por regiones y en el país
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src="./image/vaccine.png" alt="icono" />
        </div>
      </div>
    </header>
  );
};

export default App;
