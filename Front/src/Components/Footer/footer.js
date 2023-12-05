
import styles from './footer.module.css'

const Footer = () => {

    return (
        <div className={styles.footer}>
            <hr/>
            <footer className={styles.rodape}>
                <h2 className={styles.rodape_titulo}>® 2023<b> Pizza para Galera</b> Todos os direitos reservados.</h2>
            </footer>
        </div>
        
    )
}

export default Footer