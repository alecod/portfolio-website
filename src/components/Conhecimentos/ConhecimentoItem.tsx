import {ConhecimentoContainer} from './styles'
import {ReactNode} from 'react';


interface ConnhecimentoProps{
    title: string;
    icon: ReactNode;
}

export function ConhecimentoItem({title, icon}: ConnhecimentoProps) {
    return(
        <ConhecimentoContainer>
            <p>{title}</p>
            {icon}
        </ConhecimentoContainer>
    )
}