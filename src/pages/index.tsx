import Head from 'next/head'
import { useState } from 'react'
import html2canvas from 'html2canvas'
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
      html2canvas(coupon, {
        scale:2,
        windowWidth: 1920,
        windowHeight: 929,
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          canvas.toBlob(blob => {
            if(blob) {
              let newFile = new File([blob], 'coupon.jpg', {type: 'image/jpeg'})
              navigator.share({
                files: [newFile],
              })
            }
          })
        } else {
          const link = document.createElement('a')
          link.download = 'coupon.jpg'
          link.href = canvas.toDataURL('image/octet-stream', 0.98)
          link.click()
        }
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
          <button onClick={download}>Share</button>
          <button onClick={toogleEditMode}>{editMode ? "Save" : "Edit"}</button>
        </div>
        <Coupon editMode={editMode} />
      </main>
    </>
  )
}
