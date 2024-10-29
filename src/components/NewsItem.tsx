/**
 * Отображение конкретной новости
 */


type NewsType = {
    text:string,
    srcref:string,
}

export const NewsItem = ({text,srcref}:NewsType) => {
    return(
        <div className="newsitem">
            <a href={srcref}>                
                <img width={20} height={20} src="" alt=" "/>
                <span>{text}</span>
            </a>
        </div>
    )
}