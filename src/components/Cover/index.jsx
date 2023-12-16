import Background from '../../assets/images/background.png';
import styles from './styles.module.css';

export function Cover() {
    return (
        <img className={styles.cover} src={Background} alt="cover" />
    )
}