export type SideItemProps = {
    items: string[]
}

export const RightSideItems = (items: SideItemProps) => {
    return (
        <div className="right-item-container">
            <p>RightSide</p>
            {items.items.map((item, index) => (
                <div key={index} className="right-item">
                    {item}
                </div>
            ))}
        </div>
    )
}
