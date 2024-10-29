
/**
 * Вывод конкретной категории над строкой поиска
 */

type CategorySelect = {
    title:string,
    src:string,
}

export const CategorySelect = ({title,src}:CategorySelect) => {
    return(
        <div className="categoryselect">
            <a href={src}>{title}</a>
        </div>
    )
}