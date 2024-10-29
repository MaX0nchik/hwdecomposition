
/**
 * Пример фразы для поиска. Находится под строкой поиска
 */

let txt = "фаза луны сегодня";

export const ExampleFind = () => {
    return(
        <div className="examplefind">
            <span>Найдется всё. Например, {txt}</span>
        </div>
    )
}