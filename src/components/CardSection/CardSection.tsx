import {formatingDate} from '../../utils/formatingDate';
import {formatingNumber} from '../../utils/formatingNumber';
// import {formatingNumber} from '../../utils/formatingNumber';

import styles from './CardSection.module.scss';

interface cardStat {
  Region: string;
  firstDose: number;
  lastDate: string;
  objectPopulation: number;
  secondDose: number;
}

interface Props {
  cardStats: cardStat[];
}

const CardSection: React.FC<Props> = ({cardStats}) => {
  const {firstDose, secondDose, lastDate} = cardStats[0];
  const totalVaccine = firstDose * 1 + secondDose * 1;
  const percPopulation = ((firstDose / 15200376) * 100).toFixed(2);

  return (
    <section>
      <h2>Distribución General en el país</h2>
      <p>Ultima actualización: {formatingDate(lastDate)}</p>
      <div className={styles.listofcards}>
        <div className={styles.card}>
          <img alt="icono" src="./image/icon2.png" />

          <h5 className={styles.cardNumber}>{formatingNumber(firstDose)}</h5>
          <div className={styles.cardTitle}>Vacunados con una dosis</div>
        </div>
        <div className={styles.card}>
          <img alt="icono" src="./image/icon1.png" />
          <h5 className={styles.cardNumber}>{formatingNumber(secondDose)}</h5>
          <div className={styles.cardTitle}>Vacunados con dos dosis</div>
        </div>

        <div className={styles.card}>
          <img alt="icono" src="./image/icon0.png" />
          <h5 className={styles.cardNumber}>{formatingNumber(totalVaccine)}</h5>
          <div className={styles.cardTitle}>Personas Vacunadas</div>
        </div>

        <div className={styles.card}>
          <img alt="icono" src="./image/3.png" />
          <h5 className={styles.cardNumber}>{percPopulation}%</h5>
          <div className={styles.cardTitle}>Población vacunada</div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
