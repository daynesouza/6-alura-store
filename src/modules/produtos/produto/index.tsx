import style from './Produto.module.scss';
import produtos from '../produtos.json';
import classNames from 'classnames';

type Props = typeof produtos[0];


export default function Produto( props: Props){
    const { name, photo, price, id, category } = props;
    return (
        <div className={style.produto}>

            <img className={style.produto__imagem} src={photo} alt={name}/>

            <div className={ classNames({
                [style.produto__container__text]:true,
                [style[`produto__text__container--${category.label.toLocaleLowerCase()}`]]:true

            })}>
                <h3 className={ style.produto__text}>{name}</h3>
                <h3 className={ style.produto__text}>{`R$ ${price.toFixed(2)}`}</h3>
            </div>

        </div>
    )
}
