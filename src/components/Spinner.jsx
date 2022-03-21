import { ImSpinner9 } from 'react-icons/im';
import styles from "./Spinner.module.css"

export function Spinner() {
    return (
        <div>
            <div className={styles.spinner}>
                <div><ImSpinner9 className={styles.spinning} size={60}/></div>  
            </div>
            <div className={styles.loadingText}>Loading ...</div>
        </div>
    )
}
