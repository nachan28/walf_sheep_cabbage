import { ReactNode } from "react";

type RiverProps = {
    children: ReactNode;
}
export const River = ({ children }: RiverProps) => {
    return (
        <div style={{ 
            backgroundImage: "url('/river.jpg')",
            backgroundSize: "cover",
            zIndex: -200
        }}>
            {children}
        </div>
    )
}
