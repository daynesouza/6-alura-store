import { selector } from "recoil";
import { Iproduto } from "types/produto";

export const produtosAsync = selector({
    key: 'produtosAsyn',
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/produtos')
        const produtosJson: Iproduto[] = await respostaHttp.json()
        return produtosJson
    }
})
