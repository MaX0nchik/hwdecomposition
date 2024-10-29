import { NewsHeads } from "./NewsHeads"
import { NewsItem } from "./NewsItem"

/**
 * 
 * Отображение новостей в верхнем блоке
 */

export const NewsBlock = () => {
    return(
        <div className="newsblock">
            <NewsHeads/>
            <div className="newsitems">
                <NewsItem text="News 1 News 1News 1News 1News 1News 1News 1" srcref="#"/>
                <NewsItem text="News 2News 2News 2News 2News 2News 2News 2" srcref="#"/>
                <NewsItem text="News 3News 3News 3News 3News 3News 3News 3" srcref="#"/>
            </div>
        </div>
    )
}