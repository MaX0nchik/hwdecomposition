import { ChannelsProgram } from "./ChannelsProgram"

/**
 * Вывод данных по сервису "Телепрограмма"
 */

export const TVprogram = () => {
    return(
        <div className="tvprogram">
            <a>Телепрограмма</a>
            <ChannelsProgram time="02:00" name="ТНТ.Лучшее" namechannel="ТНТ"/>
            <ChannelsProgram time="02:15" name="Мультфильмы" namechannel="Карусель"/>
            <ChannelsProgram time="02:25" name="Пусть говорят" namechannel="Первый"/>
        </div>
    )
}