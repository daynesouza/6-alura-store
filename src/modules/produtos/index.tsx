import { useRecoilValue } from 'recoil';
import style from './Produtos.module.scss';

import { listaDeProdutosState } from 'state/atom';
import Produto from './produto';


export default function Produtos(){

    const produtos = useRecoilValue(listaDeProdutosState) //Recupera o valor 

    return (
        <div className={style.produtos}>
            {produtos.map( produto => (
                <Produto key={`lista${produto.id}`} {...produto}/>
            ))}
        </div>
    );
}
