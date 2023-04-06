import style from './Produto.module.scss';
import classNames from 'classnames';
import Button from 'modules/button';
import { useRecoilState } from 'recoil';
import { listaDeComprasState, saldoTotalState } from 'state/atom';
import { Icarrinho } from 'types/carrinho';
import { Iproduto } from 'types/produto';

export default function Produto( props: Iproduto){
    const { name, photo, price, id, category } = props;
    const quantidade = 1;
    const produto = {name, photo, price, id, quantidade}

    const [carrinho, setCarrinho] = useRecoilState(listaDeComprasState);
    const [saldo, setSaldo] = useRecoilState(saldoTotalState);

    const carrinhoNovo: Icarrinho | undefined = [...carrinho];

    function adicionarCarrinho(){
        if(verificaCarrinhoVazio()){
            setCarrinho([produto])
            setSaldo(saldo+price)
        }

        const carrinhoAtual = carrinho.map( (item) => {
           if(item.id === id){  
                return {
                    ...item,
                    quantidade: quantidade + 1
                }
            }
        })
        setCarrinho([...carrinhoAtual, produto])
        setSaldo(saldo+price)

       //return setCarrinho([...carrinhoAtual, produto])
       
        /* carrinhoAtual.forEach( (item) => {
            if(item.id === id){  
                item.quantidade++              
                console.log(item.quantidade++)
            }else{
                setCarrinho([...carrinhoAtual, produto])
            }
        })
        setSaldo(saldo+price) */
    }

    function verificaCarrinhoVazio(){
        if (carrinho.length === 0){
            return true
        }
    }

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
            <Button 
                key= {id}
                name="Comprar"
                onClick={ () => adicionarCarrinho() }
            />
        </div>
    )
}
