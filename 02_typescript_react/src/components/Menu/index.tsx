import styles from '@/components/Menu/Menu.module.css'

const Menu = (): React.ReactElement  => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.maxWidth}>
                <div className={styles.logo}>
                        <a href="index.html">Neotech</a>
                </div>
                <ul className={styles.menu} id="menuSite">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="sobre-empresa.html">Sobre Empresa</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>
                <div className={styles.menuBtn} id="menuBtn">
                    {/* Ícone do Font Awesome */}
                    MenuIcon
                </div>
            </div>
        </nav>
    )
}

export default Menu;