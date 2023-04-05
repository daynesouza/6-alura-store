import { atom } from "recoil";
import { Iproduto } from "types/produto";
import { produtosAsync } from "./seletores";

export const listaDeProdutosState = atom<Iproduto[]>({
    key: 'listaDeProdutosState',
    default: produtosAsync
})
