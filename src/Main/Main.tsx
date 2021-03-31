import ListOfCards from "../components/ListOfCards";
import Table from "../components/Table";
import styles from "./Main.module.scss";

const Main: React.FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              Chile
              <br />
              Vacuna
            </h1>
            <h6>
              Contador en tiempo real de la vacunación contra el Covid-19 en el
              país
            </h6>
          </div>
          <ListOfCards />
        </div>
        <div className={styles.heroRight}>
          <img src="./image/51.png" />
        </div>
      </section>
      <section>
        <Table />
      </section>
    </main>
  );
};

export default Main;
