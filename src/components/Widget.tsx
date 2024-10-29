/**
 * Отображение виджета Яндекса
 */

type widgetType = {
    title:string,
    text:string,
    children?: React.ReactNode,
}

export const Widget = ({title,text,children}:widgetType) => {
    return (
        <div className="widget">
            {children}
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    )
}