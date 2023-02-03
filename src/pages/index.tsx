import Head from 'next/head'
import { useState } from 'react'
import html2canvas from 'html2canvas'
//Styles
import styles from '@/styles/Home.module.css'
//Components
import Coupon from '@/components/Coupon'


export default function Home() {

  const [editMode, setEditMode] = useState(false);
  
  const download = () => {
    const coupon = document.getElementById('coupon_container')
    if(!coupon) {
      alert('No coupon found')
    } else {
      html2canvas(coupon).then(canvas => {
        const link = document.createElement('a')
        link.download = 'coupon.png'
        link.href = canvas.toDataURL('image/png')
        link.click()
      })
    }
  }

  return (
    <>
      <Head>
        <title>Coupon App</title>
        <meta name="description" content="Coupon generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coupon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <button onClick={download}>Download</button>
          <button>Edit</button>
        </div>
        <Coupon />
      </main>
    </>
  )
}
