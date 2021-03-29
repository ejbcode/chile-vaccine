import React, { useState } from 'react'
import { parse } from "papaparse";
import styles from "./ListOfCards.module.scss"
import UseAxios from "../../utils/UseAxios";



const ListOfCards = () => {

  const URL = "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto76/vacunacion_t.csv";
  const { data, error, loading } = UseAxios({ URL });

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  const dataParse = parse(data)
  const vaccineData = dataParse.data[dataParse.data.length - 2]


  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-ES").format((number))
  }
  const totalOneDoses = (vaccineData[1])
  const totalTwoDoses = (vaccineData[2])

  const totalVaccine = (totalOneDoses * 1) + (totalTwoDoses * 1)
  console.log(totalVaccine)
  const percPopulation = ((totalOneDoses / 15200376) * 100).toFixed(2)
  return (
    <div className={styles.listofcards}>
      <div className={styles.card}>
        <img
          src="./image/icon2.png"
          alt="icono"
        />

        <h5 className={styles.cardNumber}>{formatNumber(totalOneDoses)}</h5>
        <div className={styles.cardTitle}>Vacunados con una dosis</div>
      </div>
      <div className={styles.card}>
        <img
          src="./image/icon1.png"
          alt="icono"
        />
        <h5 className={styles.cardNumber}>{formatNumber(totalTwoDoses)}</h5>
        <div className={styles.cardTitle}>Vacunados con dos dosis</div>
      </div>

      <div className={styles.card}>
        <img
          src="./image/icon0.png"
          alt="icono"
        />
        <h5 className={styles.cardNumber}>{formatNumber(totalVaccine)}</h5>
        <div className={styles.cardTitle}>Personas Vacunadas</div>
      </div>

      <div className={styles.card}>
        <img
          src="./image/3.png"
          alt="icono"
        />
        <h5 className={styles.cardNumber}>{percPopulation}%</h5>
        <div className={styles.cardTitle}>Población vacunada</div>
      </div>
    </div>
  )

}

export default ListOfCards
