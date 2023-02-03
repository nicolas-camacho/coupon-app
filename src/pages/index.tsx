import Head from 'next/head'
import { useState } from 'react'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
//Styles
import styles from '@/styles/Home.module.css'
//Components
import Coupon from '@/components/Coupon'


export default function Home() {

  const [editMode, setEditMode] = useState(false);

  const toogleEditMode = () => {
    setEditMode(!editMode)
  }
  
  const download = async () => {
    await setEditMode(false)
    const coupon = document.getElementById('coupon_container')
    if(!coupon) {
      alert('No coupon found')
    } else {
      domtoimage.toBlob(coupon, {quality: 0.95}).then(blob => {
        saveAs(blob, "coupon.png")
      })
    }

    return true
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
          <button onClick={toogleEditMode}>{editMode ? "Save" : "Edit"}</button>
        </div>
        <Coupon editMode={editMode} />
      </main>
    </>
  )
}
