import Head from "next/head";
import Header from "../src/Header";
import styles from "../styles/Home.module.scss";

import axios from "axios";
import CardSection from "../src/components/CardSection";

import csvToJSON from "../src/utils/csvToJSON";
import { GetStaticProps } from "next";
import joinJsonintoDataForTable from "../src/utils/JSONToRegionTable";
import Main from "../src/Main";
import Table from "../src/components/Table";
interface Props {
  allStats: stats[];
}

const Home: React.FC<Props> = ({ allStats }) => {
  const cardStats = allStats.filter((item) => item.Region === "Total");

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
      <article className={styles.article}>sdsd</article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const URL =
    "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto76/vacunacion.csv";

  const { data } = await axios(URL);
  const dataInJson = csvToJSON(data);
  const newData = joinJsonintoDataForTable(dataInJson);

  return {
    // revalidate: 10, An optional amount in seconds after which a page re-generation can occur. If not neccesary if the data of insurances is always the same
    props: {
      allStats: newData,
    },
  };
};
export default Home;
