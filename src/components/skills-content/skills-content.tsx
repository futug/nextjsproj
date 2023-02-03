import styles from './skills-content.module.css';
import cx from 'classnames';

interface Props {
    programmImageUrl:string;
    description:string;
    scoreImageUrl:string;

}

export function SkillsContent (props:Props) {
    return (
        <div className={cx(styles.ps, styles.cell)}>
            <img className={styles.skill_pic} src={props.programmImageUrl} alt="AdobePhotoshop" />
            <p className={styles.describe}>{props.description}</p>
            <img src={props.scoreImageUrl} alt="" className={styles.skills_score} />
        </div>
    )
}

