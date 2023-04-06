import style from './Main.module.scss';
import Produtos from 'modules/produtos';
import Carrinho from 'modules/carrinho';


export default function Main(){
    return(
        <main className={ `${style.main} container` }>
            <section className={style.main__produtos}>
                <Produtos/>
            </section>

            <section className={style.main__carrinho}>
                <Carrinho/>
            </section>
       </main>
    )
}

