import Head from 'next/head'
import styles from '../styles/Main.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Sample</title>
      </Head>
      <p>Hello</p>
    </div>
  )
}
