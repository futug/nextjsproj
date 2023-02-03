import styles from './header.module.css';
import cx from 'classnames';
export function Header()  {
    return (
        <>
                  <header className={styles.header_background}>
              <nav className={styles.header_nav}>
                  <ul className={cx(styles.header_navlinks, styles.wrap)}>
                      <li>
                          <a href="#home" className="s1-link">Home</a>
                      </li>
                      <li>
                          <a href="#about" className="s1-link">About me</a>
                      </li>
                      <li>
                          <a href="#skills" className="s1-link">Skills</a>
                      </li>
                      <li>
                          <a href="#port" className="s1-link">Portfolio</a>
                      </li>
                      <li>
                          <a href="#contacts" className="s1-link kek">Cotnacts</a>
                      </li>
                  </ul>
                  <div className={"header_nav_close"}>
                      <div className={"header_nav_close_stripe"}>
                      </div>
                  </div>
                  <div className={"lang_choice_main_mobile"}>
                      <span>
                          <a href="#!" className={cx(styles.lang_choice,styles.ru)}>ru</a> <span className={cx(styles.lang_choice,styles.ru)}>|</span> <a href="#!" className={cx(styles.lang_choice,styles.eng)}>eng</a>
                      </span>
                  </div>
              </nav>
          </header>
          <div className={styles.burger_menu}>
                  <div className={styles.burger_menu_stripe}>
                  </div>
              </div>
        </>
    )
}