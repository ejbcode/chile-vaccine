import React from "react";
import ListOfCards from "../components/ListOfCards";
import Table from "../components/Table";
import styles from "./Main.module.scss";

const Main: React.FC = () => {
  return (
    <main className={styles.container}>
      {/* <PlayGround /> */}
      <section className={styles.board}>
        <h2>Distribucion General en el país</h2>
        <p>Ultima actualización: 11/04/2021 10pm</p>
        <div className={styles.boardContent}>
          <ListOfCards />
        </div>
      </section>
      <section className={styles.board}>
        <h2>Distribución general por regiones</h2>
        <Table />
      </section>
    </main>
  );
};

export default Main;
