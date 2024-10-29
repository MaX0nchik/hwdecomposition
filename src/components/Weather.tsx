/**
 * Вывод данных о погоде
 */

export const Weather = () => {
    return(
        <div className="weather">
            <a>Погода</a>
            <div>
                <img width={20} height={20} alt="weather" src="#"/>
                <span className="temp">+17° </span>
                <span>Утром +17, днем +20</span>
            </div>
        </div>
    )
}