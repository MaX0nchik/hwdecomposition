import { LiveItem } from "./LiveItem"

/**
 * Отображение данных для сервиса "Эфир"
 */

export const Live = () => {
    return(
        <div className="live">
            <a>Эфир</a>
            <LiveItem title="1" nameChannel="Channel 1"/>
            <LiveItem title="2" nameChannel="Channel 2"/>
            <LiveItem title="3" nameChannel="Channel 3"/>
        </div>
    )
}