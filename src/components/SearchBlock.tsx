import { Category } from "./Category"
import { ExampleFind } from "./ExampleFind"
import { Find } from "./Find"
import { Logo } from "./Logo"


/**
 * Блок для поиска информации
 */
export const SearchBlock = () => {
    return (
        <div className="searchblock">
            <Logo/>
            <div className="searchstring">
                <Category/>
                <Find/>
                <ExampleFind/>
            </div>
        </div>
    )
}