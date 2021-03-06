import Head from 'next/head'
import Image from 'next/image'
import TitlePage from '../components/UI/Title/TitlePage'
// import styles from '../styles/styles.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <TitlePage title="home"></TitlePage>
      </main>
    </div>
  )
}
