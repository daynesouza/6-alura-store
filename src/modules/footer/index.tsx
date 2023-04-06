import style from './Footer.module.scss';
import logo from 'assets/logo.svg';

export default function Footer(){
    return(
        <footer className={style.footer}>

            <section className={style.footer__container}>
            <img className={style.footer__container__tittle} src={logo} alt="logo alura store"/>
            </section>

        </footer>
    );
}
