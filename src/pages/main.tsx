export function Main()  {
    return (
        <>
        <main>
              <div className="burger_menu">
                  <div className="burger_menu_stripe">
                  </div>
              </div>
              <section className="section_wrap wrap section" id="home">
                  <h1 className="header_title">Denis Novik</h1>
                  <div className="header_subtitle">UX | UI designer 24 years old, Minsk</div>
                  <div className="lang_choice_main">
                      <span>
                          <a href="" className="lang_choice ru">ru</a> <span className="lang_choice ru">|</span> <a href="" className="lang_choice eng">eng</a>
                      </span>
                  </div>
                  <div className="header_pic">
                      <img className="header_picture" src="../huy/img/header_pic.jpg" alt="" />
                  </div>
              </section>
              <section className="about section" id="about">
                  <h3 className="about_title">About me</h3>
                  <p className="about_article">Hi, I&rsquo;m Denis – UX/UI designer from Minsk.
                      I&rsquo;m interested in design and everything connected with it. <br />
                      <br /><br />
                      I&rsquo;m studying at courses &rdquo;Web and mobile design
                      interfaces&rdquo; in IT-Academy.<br />
                      <br /><br />
                      Ready to implement excellent projects
                      with wonderful people.</p>
              </section>
              <section className="skills wrap section" id="skills">
                  <h3 className="skills_title">Skills</h3>
                  <p className="skills_subtitle">I work in such programs as</p>
                  <div className="skills_grid">
                      <div className="ps cell">
                          <img className="skill_pic" src="../huy/img/ps.jpg" alt="AdobePhotoshop" />
                          <p className="describe">Adobe Photoshop</p>
                          <img src="../huy/img/most_stars.svg" alt="" className="skills_score" />
                      </div>
                      <div className="ai cell">
                          <img className="skill_pic" src="../huy/img/ai.png" alt="AdobeIllustrator" />
                          <p className="describe">Adobe Illustrator</p>
                          <img src="../huy/img/ai_stars.svg" alt="" className="skills_score" />
                      </div>
                      <div className="ae cell">
                          <img className="skill_pic" src="../huy/img/ae.png" alt="AfterEffects" />
                          <p className="describe">Adobe After Effects</p>
                          <img src="../huy/img/most_stars.svg" alt="" className="skills_score" />
                      </div>
                      <div className="figma cell">
                          <img className="skill_pic_f" src="../huy/img/figma.jpg" alt="figma" />
                          <p className="describe">Figma</p>
                          <img src="../huy/img/most_stars.svg" alt="" className="skills_score_f" />
                      </div>
                  </div>
              </section>
              <section className="portfolio">
                  <div className="wrap">
                      <h3 className="portfolio_title section" id="port">Portfolio</h3>
                  </div>
                    <figure className="example_pic">
                        <img src="../huy/img/woman.jpg" alt="" className="portfolio_pic" />
                        <figcaption>Online fashion store - Homepage</figcaption>
                    </figure>
                    <figure className="example_pic">
                        <img src="../huy/img/reebok.jpg" alt="" className="portfolio_pic" />
                        <figcaption>Landing Page - Concept</figcaption>
                    </figure>
                    <figure className="example_pic">
                        <img src="../huy/img/braun.jpg" alt="" className="portfolio_pic" />
                            <figcaption>Reebok Store - Concept</figcaption>
                    </figure>
             </section>
             <section className="contacts wrap section" id="contacts">
                <h3 className="contacts_title">Contacts</h3>
                <p className="contacts_subtitle">Want to know more or just chat? You are welcome!</p>
                <button className="contacts_btn" type="submit">Send massege</button>
            </section> 
        </main>
        </>
    )
}