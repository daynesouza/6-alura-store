import { atom } from "recoil";
import { Iproduto } from "types/produto";
import { Icarrinho } from "types/carrinho";
import { produtosAsync } from "./seletores";

export const listaDeProdutosState = atom<Iproduto[]>({
    key: 'listaDeProdutosState',
    default: produtosAsync
})

export const listaDeComprasState = atom<Icarrinho[]>({
    key: 'listaDeComprasState',
    default: []
})

export const saldoTotalState = atom<number>({
    key: 'saldoTotalState',
    default: 0
})
