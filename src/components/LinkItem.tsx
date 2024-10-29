
/**
 * Ссылки на различные сервисы категории "Посещаемое"
 */

type LinkItemType = {
    title:string,
    text:string,
    src:string,
}

export const LinkItem = ({title,text,src}:LinkItemType) => {
    return(
        <div>
            <span>
                <a href={src}>{title} - {text}</a>
            </span>
        </div>
    )
}