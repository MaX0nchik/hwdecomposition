import { NewsSelect } from "./NewsSelect"
import { NowDate } from "./NowDate"


/**
 * 
 * Заголовки новостей
 */
export const NewsHeads = () => {
    return(
        <div className="newsheads">
            <NewsSelect type="main" text="Now" src="#"/>
            <NewsSelect type="secondary" text="InCountry" src="#"/>
            <NewsSelect type="secondary" text="Recomendation" src="#"/>
            <NowDate/>
        </div>
    )
}