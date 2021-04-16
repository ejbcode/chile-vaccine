import styles from "./CardSection.module.scss";
import { formatingDate } from "../../utils/formatingDate";

interface cardStat {
  Region: "Total";
  firstDose: number;
  lastDate: string;
  objectPopulation: number;
  secondDose: number;
}

interface Props {
  cardStats: cardStat[];
}

const CardSection: React.FC<Props> = ({ cardStats }) => {
  const { firstDose, objectPopulation, secondDose, lastDate } = cardStats[0];
  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("es-ES").format(number);
  };
  const totalVaccine = firstDose * 1 + secondDose * 1;
  const percPopulation = ((firstDose / 15200376) * 100).toFixed(2);

  return (
    <section>
      <h2>Distribución General en el país</h2>
      <p>Ultima actualización: {formatingDate(lastDate)}</p>
      <div className={styles.listofcards}>
        <div className={styles.card}>
          <img src="./image/icon2.png" alt="icono" />

          <h5 className={styles.cardNumber}>{formatNumber(firstDose)}</h5>
          <div className={styles.cardTitle}>Vacunados con una dosis</div>
        </div>
        <div className={styles.card}>
          <img src="./image/icon1.png" alt="icono" />
          <h5 className={styles.cardNumber}>{formatNumber(secondDose)}</h5>
          <div className={styles.cardTitle}>Vacunados con dos dosis</div>
        </div>

        <div className={styles.card}>
          <img src="./image/icon0.png" alt="icono" />
          <h5 className={styles.cardNumber}>{formatNumber(totalVaccine)}</h5>
          <div className={styles.cardTitle}>Personas Vacunadas</div>
        </div>

        <div className={styles.card}>
          <img src="./image/3.png" alt="icono" />
          <h5 className={styles.cardNumber}>{percPopulation}%</h5>
          <div className={styles.cardTitle}>Población vacunada</div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
