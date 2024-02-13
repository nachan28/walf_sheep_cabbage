type Props = {
    src: string;
    onClick: () => void;
    children: string;
}

export const Item = (props: Props) => {
    const { src, children, onClick } = props
    return (
        <>
            <img src={src} alt="Sheep" width={"100px"} onClick={onClick}/>
            <span>{children}</span>
        </>
    )
}
