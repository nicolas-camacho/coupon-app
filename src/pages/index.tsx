import Head from 'next/head'
import styles from '@/styles/Home.module.css'
//Components
import Coupon from '@/components/Coupon'


export default function Home() {
  return (
    <>
      <Head>
        <title>Coupon App</title>
        <meta name="description" content="Coupon generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coupon.png" />
      </Head>
      <main className={styles.main}>
        <Coupon />
      </main>
    </>
  )
}
