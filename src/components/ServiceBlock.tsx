import { Live } from "./Live"
import { Maps } from "./Maps"
import { TVprogram } from "./TVprogram"
import { VisitRefs } from "./VisitRefs"
import { Weather } from "./Weather"

/**
 * Блок различных сервисов под поисковой строкой
 */

export const ServiceBlock = () => {
    return (
        <div className="services">
            <div className="column1">
                <Weather/>
                <VisitRefs/>
            </div>
            <div className="column2">
                <Maps/>
                <TVprogram/>
            </div>
            <div className="column3">
                <Live/>
            </div>
        </div>
    )
}