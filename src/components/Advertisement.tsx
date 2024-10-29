/**
 * Вывод рекламы под строкой поиска
 */


type AdvertisementType = {
    alt:string,
    src:string,
}

export const Advertisement = ({alt,src}:AdvertisementType) => {
    return(
        <div className="banner">
            <img className="imgbanner" src = {src} alt={alt}/>
        </div>
    )
}