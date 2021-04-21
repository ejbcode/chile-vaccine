import Head from 'next/head';
import {GetStaticProps} from 'next';
import axios from 'axios';

import csvToJSON from '../src/utils/csvToJSON';
import Table from '../src/components/Table';
import styles from '../styles/Home.module.scss';
import CardSection from '../src/components/CardSection';
import joinJsonintoDataForTable from '../src/utils/JSONToRegionTable';
import Header from '../src/Header';
interface Props {
  allStats: stats[];
}

const Home: React.FC<Props> = ({allStats}) => {
  const cardStats = allStats.filter((item) => item.Region === 'Total');

  return (
    <>
      <Head>
        <title>Vacunación en Chile</title>
        <link href="/favicon.ico" rel="icon" />
        <html lang="es" />
      </Head>
      <Header />
      <main className={styles.main}>
        <CardSection cardStats={cardStats} />
        <Table allStats={allStats} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const URL =
    'https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto76/vacunacion.csv';

  const {data} = await axios(URL);
  const dataInJson = csvToJSON(data);
  const newData = joinJsonintoDataForTable(dataInJson);

  return {
    revalidate: 43200,
    props: {
      allStats: newData,
    },
  };
};
export default Home;
