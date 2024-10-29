import { CategorySelect } from "./CategorySelect"

/**
 * 
 * Категории над строкой поиска
 */

export const Category = () => {
    return(
        <div className="category">
            <CategorySelect title="Видео" src="#"/>
            <CategorySelect title="Картинки" src="#"/>
            <CategorySelect title="Новости" src="#"/>
            <CategorySelect title="Карты" src="#"/>
            <CategorySelect title="Маркет" src="#"/>
            <CategorySelect title="Переводчик" src="#"/>
            <CategorySelect title="Эфир" src="#"/>
            <CategorySelect title="ещё" src="#"/>
        </div>
    )
}