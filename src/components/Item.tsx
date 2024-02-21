import { Location } from "../App";

type Props = {
    src: string;
    type: "wolf" | "sheep" | "cabbage"
    location: Location
    onClick: () => void
}

export const Item = (props: Props) => {
    const { src, type, onClick} = props

    return (
            <div
                style={{
                    scale: 0.8,
                    fontSize: 25,
                    fontWeight: 'bold',
                }}
            >
                <img src={src} alt={type} width="250px" 
                onClick={onClick}/>
            </div>
    )
}
