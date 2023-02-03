import styles from './section-home.module.css';
import cx from 'classnames';

export function SectionHome() {
    return (
        <>
        <section className={cx(styles.section_wrap, styles.wrap, styles.section)} id="home">
                  <h1 className={styles.header_title}>Denis Novik</h1>
                  <div className={styles.header_subtitle}>UX | UI designer 24 years old, Minsk</div>
                  <div className={styles.lang_choice_main}>
                      <span>
                          <a href="" className={cx(styles.lang_choice,styles.ru)}>ru</a> <span className={cx(styles.lang_choice,styles.ru)}>|</span> <a href="" className={cx(styles.lang_choice,styles.eng)}>eng</a>
                      </span>
                  </div>
                  <div className="header_pic">
                      <img className="header_picture" src="./header_pic.jpg" alt="" />
                  </div>
              </section>
        </>
    )
}