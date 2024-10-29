
/**
 * Вывод информации для конкретного телеканала
 */

type ChannelsProgramType = {
    time:string,
    name:string,
    namechannel:string,
}

export const ChannelsProgram = ({time, name, namechannel}:ChannelsProgramType) => {
    return(
        <div>
            <a>{time} {name}  
                <span className="namechan">
                    {namechannel}
                </span>
            </a>
        </div>
    )
}