export function Header()  {
    return (
        <>
                  <header className="header_background">
              <nav className="header_nav">
                  <ul className="header_navlinks wrap">
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
                  <div className="header_nav_close">
                      <div className="header_nav_close_stripe">
                      </div>
                  </div>
                  <div className="lang_choice_main_mobile">
                      <span>
                          <a href="#!" className="lang_choice ru">ru</a> <span className="lang_choice ru">|</span> <a href="#!" className="lang_choice eng">eng</a>
                      </span>
                  </div>
              </nav>
          </header>
        </>
    )
}