import { LinkItem } from "./LinkItem"

/**
 * Вывод данных по сервису "Посещаемое"
 */

export const VisitRefs = () => {
    return(
        <div className="visitrefs">
            <a>Посещаемое</a>
            <LinkItem title="Недвижимость" text="новостройки" src="#"/>
            <LinkItem title="Маркет" text="люстры и светильники" src="#"/>
            <LinkItem title="Авто.ру" text="привод 4х4" src="#"/>
        </div>
    )
}