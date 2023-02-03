import styles from './main.module.css';
import cx from 'classnames';
export function Main()  {
    return (
        <>
        <main>
              <div className={styles.burger_menu}>
                  <div className={styles.burger_menu_stripe}>
                  </div>
              </div>
              <section className={cx(styles.section_wrap, styles.wrap, styles.section)} id="home">
                  <h1 className={styles.header_title}>Denis Novik</h1>
                  <div className={styles.header_subtitle}>UX | UI designer 24 years old, Minsk</div>
                  <div className={styles.lang_choice_main}>
                      <span>
                          <a href="" className={cx(styles.lang_choice,styles.ru)}>ru</a> <span className={cx(styles.lang_choice,styles.ru)}>|</span> <a href="" className={cx(styles.lang_choice,styles.eng)}>eng</a>
                      </span>
                  </div>
                  <div className="header_pic">
                      <img className="header_picture" src="../huy/img/header_pic.jpg" alt="" />
                  </div>
              </section>
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
              <section className={cx(styles.skills, styles.wrap, styles.section)} id="skills">
                  <h3 className={styles.skills_title}>Skills</h3>
                  <p className={styles.skills_subtitle}>I work in such programs as</p>
                  <div className={styles.skills_grid}>
                      <div className={cx(styles.ps, styles.cell)}>
                          <img className={styles.skill_pic} src="../huy/img/ps.jpg" alt="AdobePhotoshop" />
                          <p className={styles.describe}>Adobe Photoshop</p>
                          <img src="../huy/img/most_stars.svg" alt="" className={styles.skills_score} />
                      </div>
                      <div className={cx(styles.ai, styles.cell)}>
                          <img className={styles.skill_pic} src="../huy/img/ai.png" alt="AdobeIllustrator" />
                          <p className={styles.describe}>Adobe Illustrator</p>
                          <img src="../huy/img/ai_stars.svg" alt="" className={styles.skills_score} />
                      </div>
                      <div className={cx(styles.ae, styles.cell)}>
                          <img className={styles.skill_pic} src="../huy/img/ae.png" alt="AfterEffects" />
                          <p className={styles.describe}>Adobe After Effects</p>
                          <img src="../huy/img/most_stars.svg" alt="" className={styles.skills_score} />
                      </div>
                      <div className={cx(styles.figma, styles.cell)}>
                          <img className={styles.skill_pic_f} src="../huy/img/figma.jpg" alt="figma" />
                          <p className={styles.describe}>Figma</p>
                          <img src="../huy/img/most_stars.svg" alt="" className={styles.skills_score_f} />
                      </div>
                  </div>
              </section>
              <section className={styles.portfolio}>
                  <div className={styles.wrap}>
                      <h3 className={cx(styles.portfolio_title, styles.section)} id="port">Portfolio</h3>
                  </div>
                    <figure className={styles.example_pic}>
                        <img src="../huy/img/woman.jpg" alt="" className={styles.portfolio_pic} />
                        <figcaption className={styles.figcaption}>Online fashion store - Homepage</figcaption>
                    </figure>
                    <figure className={styles.example_pic}>
                        <img src="../huy/img/reebok.jpg" alt="" className={styles.portfolio_pic} />
                        <figcaption>Landing Page - Concept</figcaption>
                    </figure>
                    <figure className="example_pic">
                        <img src="../huy/img/braun.jpg" alt="" className={styles.portfolio_pic} />
                            <figcaption>Reebok Store - Concept</figcaption>
                    </figure>
             </section>
             <section className={cx(styles.contacts, styles.wrap, styles.section)} id="contacts">
                <h3 className={styles.contacts_title}>Contacts</h3>
                <p className={styles.contacts_subtitle}>Want to know more or just chat? You are welcome!</p>
                <button className={styles.contacts_btn} type="submit">Send massege</button>
            </section> 
        </main>
        </>
    )
}