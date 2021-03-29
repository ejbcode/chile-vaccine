import Head from 'next/head'
import Header from "../src/Header"

import Main from '../src/Main'

export default function Home() {
  return (

    <>
      <Head>
        <title>Vacunación en Chile</title>
        <link href="/favicon.ico" rel="icon" />
        <html lang="es" />
      </Head>

      <Header />
      <Main />
    </>

  )
}
