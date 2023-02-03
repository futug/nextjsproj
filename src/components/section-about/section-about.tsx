import styles from './section-about.module.css';
import cx from 'classnames';

export function SectionAbout() {
    return (
        <section className={cx(styles.about, styles.section)} id="about">
        <h3 className={styles.about_title}>About me</h3>
        <p className={styles.about_article}>Hi, I&rsquo;m Denis – UX/UI designer from Minsk.
            I&rsquo;m interested in design and everything connected with it. <br />
            <br /><br />
            I&rsquo;m studying at courses &rdquo;Web and mobile design
            interfaces&rdquo; in IT-Academy.<br />
            <br /><br />
            Ready to implement excellent projects
            with wonderful people.</p>
        </section>
    )
}