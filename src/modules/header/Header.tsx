import React from 'react';
import classNames from 'classnames';
import style from './header.module.scss';
import logo from 'assets/logo.svg';
import { CgSearch } from 'react-icons/cg'
import { BsCartDash } from 'react-icons/bs'

export default function Header(){

    return(
        <header className={`${style.header} container`}>
            <nav className={`${style.header__cabecalho} container`}>
                <ul className={`${style.cabecalho__menu} container`}>
                    <li className={style.cabecalho__links}><img className={style.header__cabecalho__container__tittle} src={logo} alt="logo alura store"/></li>
                    <li className={style.cabecalho__links}><a className={style.cabecalho__link}>Masculino</a></li>
                    <li className={style.cabecalho__links}><a className={style.cabecalho__link}>Feminino</a></li>
                    <li className={style.cabecalho__links}><a className={style.cabecalho__link}>Infantil</a></li>
                    <li className={ classNames({
                        [style.cabecalho__link]:true,
                        [style["cabecalho__links--pesquisa"]]: true
                    })}>
                        <CgSearch color='black'/>
                        <input className={style.cabecalho__pesquisa} placeholder='Buscar'/>
                    </li>
                    <li className={style.cabecalho__links}><BsCartDash/></li>
                </ul>
            </nav>
        </header>
    )
}