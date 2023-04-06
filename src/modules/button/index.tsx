import style from './Button.module.scss'

interface Props{
    name: string;
    onClick: () => void | null
}

export default function Button ( {name, onClick} : Props ){
    return(
        <button 
            className={style.button}
            onClick={onClick}
        >
            {name}
        </button>
    )

}
