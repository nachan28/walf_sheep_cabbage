type Props = {
    src: string;
    type: string;
    onClick: () => void;
    children: string;
}

export const Item = (props: Props) => {
    const { src, type, children, onClick } = props
    return (
        <>
            <img src={src} alt={type} width={"100px"} onClick={onClick}/>
            <span>{children}</span>
        </>
    )
}
