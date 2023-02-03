import styles from './Coupon.module.css'
import Image from 'next/image'
//Components
import EditableText from '@/components/EditableText'

export interface CouponProps {
    editMode: boolean
}

const Coupon = (props: CouponProps) => {
    return (
        <div className={styles.container} id="coupon_container">
            <div className={styles.coupon}>
                <div className={styles.coupon_main}>
                    <div className={styles.main_header}>
                        <h1>Doer</h1>
                        <EditableText defaultValue="Nicolas Camacho" editable={props.editMode} />
                    </div>
                    <div className={styles.main_content}>
                        <h2>Coupon for:</h2>
                        <EditableText defaultValue="Free coffee" editable={props.editMode} />
                    </div>
                    <div className={styles.main_details}>
                        <div className={styles.details_date}> 
                            <h2>Valid until:</h2>
                            <EditableText defaultValue="31/12/2021" editable={props.editMode} />
                        </div>
                        <div className={styles.details_price}>
                            <div>
                                <h2>Price</h2>
                                <EditableText defaultValue="$ 0.00" editable={props.editMode} />
                            </div>
                        </div>
                        <div className={styles.details_location}>
                            <EditableText defaultValue="Barranquilla - Atlantico / Colombia" editable={props.editMode} />
                        </div>
                    </div>
                </div>
                <div className={styles.coupon_rip}></div>
                <div className={styles.coupon_footer}>
                    <div>
                        <Image priority src="/otherqr.svg" alt="Logo" width={100} height={100} className={styles.qr} />
                    </div>
                    <div className={styles.footer_logos}>
                        <h2>Powered by</h2>
                        <div className={styles.logos}>
                            <Image src="/vercel-logotype-dark.svg" alt="Logo" width={100} height={25} className={styles.vercel} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupon