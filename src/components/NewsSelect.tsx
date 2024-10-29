
type SelectType = {
    type:string,
    text:string,
    src:string
}

/**
 * 
 * Отображение выбранного раздела новостей
 */


export const NewsSelect = ({type,text,src}:SelectType) => {
    return(
        <div className={"newsselect_" + type}>
            <a href={src}>{text}</a>
        </div>
    )
}