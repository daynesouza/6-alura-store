import produtos from './produtos.json';
import style from './Produtos.module.scss';
import Produto from './produto';

import { useState } from 'react';


export default function Produtos(){
    const [lista, setlista] = useState(produtos);
    return (
        <div className={style.produtos}>
            {lista.map( produto => (
                <Produto key={produto.id} {...produto}/>
            ))}
        </div>
    );
}
