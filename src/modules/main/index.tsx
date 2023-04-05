import style from './Main.module.scss';
import { useState } from 'react';
import Produtos from 'modules/produtos';
import { useSetRecoilState } from 'recoil';
import { Iproduto } from 'types/produto';
import { listaDeProdutosState } from 'state/atom';


export default function Main(){
    const setProdutos = useSetRecoilState<Iproduto[]>(listaDeProdutosState);
    //setProdutos(listaDeProdutos => [...listaDeProdutos, produto])
    const produtos = useSetRecoilState(listaDeProdutosState);

    return(
        <main className={ `${style.main} container` }>
            <section className={style.main__produtos}>
                
            </section>

            <section className={style.main__carrinho}>
                
            </section>
       </main>
    )
}

