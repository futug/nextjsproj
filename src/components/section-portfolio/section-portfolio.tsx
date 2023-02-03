import styles from './section-portfolio.module.css';
import cx from 'classnames';

interface Props {
    imageUrl:string;
    description:string;
}

export function SectionPortfolio (props:Props) {
    return (
        <figure className={styles.example_pic}>
            <img src={props.imageUrl} alt="" className={styles.portfolio_pic} />
            <figcaption className={styles.figcaption}>{props.description}</figcaption>
        </figure>
    )
}

