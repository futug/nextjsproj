import styles from './footer.module.css';
export  function Footer()   {
    return (
        <>
        <footer className={styles.wrap}>
        <div className={styles.footer_grid}>
        <div className={styles.social_media}>
            <a href="!#"><img src="./linkedin.svg" alt="" className={styles.sm_anim} /></a>
            <a href="!#"><img src="./instagramm.svg" alt="" className={styles.sm_anim} /></a>
            <a href="!#"><img src="./behance.svg" alt="" className={styles.sm_anim} /></a>
            <a href="!#"><img src="./dribble.svg" alt="" className={styles.sm_anim} /></a>
        </div>
        </div>
        <p className={styles.footer_describe}>
            Like me on LinkedIn, Instagram, Behance, Dribble
        </p>
    </footer>
        </>
    )
}