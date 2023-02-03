import styles from './section-portfolio-main.module.css';
import { SectionPortfolio } from '../section-portfolio/section-portfolio';
import cx from 'classnames';

export function SectionPortfolioMain()  {
    return  (
        <section className={styles.portfolio}>
            <div className={styles.wrap}>
                <h3 className={cx(styles.portfolio_title, styles.section)} id="port">Portfolio</h3>
            </div>
            <SectionPortfolio imageUrl='./woman.jpg' description='Online fashion store - Homepage'></SectionPortfolio>
            <SectionPortfolio imageUrl='./reebok.jpg' description='Reebok Store - Concept'></SectionPortfolio>
            <SectionPortfolio imageUrl='./braun.jpg' description='Landing Page - Concept'></SectionPortfolio>
        </section>
    )
}