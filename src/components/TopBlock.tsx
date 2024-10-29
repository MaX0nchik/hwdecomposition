import { Market } from "./Market"
import { NewsBlock } from "./NewsBlock"
import { Widget } from "./Widget"

/**
 * Верхний блок до поисковой строки
 */

export const TopBlock = () => {
    return(
        <div className="top">
            <div className="topblocknews">
                <NewsBlock />
                <Widget title="Work" text="Watch on Yandex">
                    <img height={20} width={30} src="" alt=""/>
                </Widget>
            </div>
            <div className="market">
                <Market/>
            </div>
        </div>
    )
}