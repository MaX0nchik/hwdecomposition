
/**
 * Вывод определенного эфира для телеканала
 */

type LiveItemType = {
    title:string,
    nameChannel:string
}

export const LiveItem = ({title,nameChannel}:LiveItemType) => {
    return(
        <div>
            <a>
            <span>{title}</span>
            <span>{nameChannel}</span>
            </a>
        </div>
    )
}