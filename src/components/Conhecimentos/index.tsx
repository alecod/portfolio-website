import { Container } from './styles'
import { SectionTitle } from '../SectionTitle'
import { ConhecimentoItem } from './ConhecimentoItem'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io5'


export function Conhecimentos() {
    return (
        <Container>
            <SectionTitle title="Conhecimentos" />
            <section>
                <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />}/>
                <ConhecimentoItem title="CSS" icon={<FaCss3Alt />}/>
                <ConhecimentoItem title="JAVASCRIPT" icon={<IoLogoJavascript />}/>
                <ConhecimentoItem title="REACT" icon={<FaReact />}/>
            </section>
        </Container>
    )
}