import Button from 'modules/button';
import style from './Carrinho.module.scss';
import { useRecoilState } from 'recoil';
import { listaDeComprasState, saldoTotalState } from 'state/atom';

export default function Carrinho() {

    const [carrinho, setCarrinho] = useRecoilState(listaDeComprasState);
    const [saldo, setSaldo] = useRecoilState(saldoTotalState);

    function adicionarProduto() {
        if (carrinho !== null) {
            return (
                carrinho.map((produto) =>
                    <div key={`carrinho${produto.id}`} className={style.item}>
                        <img src={produto.photo} alt={produto.name} className={style.item__img} />
                        <span className={style.item__text}>{produto.name}</span>
                        <button className={style.item__btn}>-</button>
                        <span className={style.item__text}>{produto.quantidade}</span>
                        <button className={style.item__btn}>+</button>
                    </div>))
        }
    }

    return (
        <div className={style.carrinho}>
            <h2 className={style.carrinho__titulo}>Carrinho</h2>

            {adicionarProduto()}

            <div className={style.carrinho__saldo}>
                <span className={style.carrinho__saldo__text}>Saldo Total</span>
                <span className={style.carrinho__saldo__text}>R$ {saldo.toFixed(2)}</span>
            </div>

            <Button
                name='Comprar'
                onClick={() => null}
            />
        </div>
    )
}
