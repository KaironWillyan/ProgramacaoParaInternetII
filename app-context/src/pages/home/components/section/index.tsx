import { PropsWithChildren, useContext } from "react";
import './style.css'
import { LevelContext } from "./LevelContext";
interface SectionProps extends PropsWithChildren{
    isFancy: boolean
}

export default function Section({children, isFancy}:SectionProps){
    const level = useContext(LevelContext);
    return (
        <section className={
            'section' + 
            (isFancy? '-fancy' : '')
        }>
        <LevelContext.Provider value={level + 1}>
            {children}
        </LevelContext.Provider>
        </section>
    )
}