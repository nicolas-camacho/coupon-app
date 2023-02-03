import styles from './Coupon.module.css'
import Image from 'next/image'

const Coupon = () => {
    return (
        <div className={styles.coupon}>
            <div className={styles.coupon_main}>
                <div className={styles.main_header}>
                    <h1>Doer</h1>
                    <p>Nicolas Camacho</p>
                </div>
                <div className={styles.main_content}>
                    <h2>Coupon for:</h2>
                    <p>Free coffee</p>
                </div>
                <div className={styles.main_details}>
                    <div className={styles.details_date}> 
                        <h2>Valid until:</h2>
                        <p>31/12/2021</p>
                    </div>
                    <div className={styles.details_price}>
                        <div>
                            <h2>Price</h2>
                            <p>$ 0.00</p>
                        </div>
                    </div>
                    <div className={styles.details_location}>
                        <p>
                            <strong>Barranquilla - Atlantico / Colombia</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.coupon_rip}></div>
            <div className={styles.coupon_footer}>
                <div>
                    <Image src="/qr.svg" alt="Logo" width={100} height={100} />
                </div>
                <div className={styles.footer_logos}>
                    <h2>Powered by</h2>
                    <div className={styles.logos}>
                        <Image src="/next.svg" alt="Logo" width={50} height={50} />
                        <Image src="/vercel.svg" alt="Logo" width={50} height={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupon