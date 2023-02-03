import styles from './section-contacts.module.css';
import cx from 'classnames';

export function SectionContacts()   {
    return  (
            <section className={cx(styles.contacts, styles.wrap, styles.section)} id="contacts">
                <h3 className={styles.contacts_title}>Contacts</h3>
                <p className={styles.contacts_subtitle}>Want to know more or just chat? You are welcome!</p>
                <button className={styles.contacts_btn} type="submit">Send massege</button>
            </section> 
    )
}