export type SideItemProps = {
    items: string[]
}

export const RightSideItems = (items: SideItemProps) => {
    return (
        <div className="right-item-container" style={{
            position: "fixed",
            top: "0", 
            right: "0",
            margin: "20px"
        }}>
            <p>RightSide</p>
            {items.items.map((item, index) => (
                <div key={index} className="right-item">
                    {item}
                </div>
            ))}
        </div>
    )
}
