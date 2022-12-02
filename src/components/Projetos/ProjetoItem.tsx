import {ProjetoContainer} from './styles'
import Link from 'next/link'
import {AiOutlineRightCircle} from 'react-icons/ai'

export default function ProjetosItem() {
    return (
        <ProjetoContainer imgUrl="https://nubank.com.br/images-cms/1668630922-home_bolao_desk.jpg?w=1152&dpr=1&auto=compress&fm=webp">
            <section>
                <div className='overlay'/>
                <div className='text'>
                    <h1>Projeto 01</h1>
                    <h2>- Website</h2>
                </div>
            </section>
            <button type='button'>
                <Link href="/projetos">
                    <a>Ver Mais <AiOutlineRightCircle /></a>
                    
                </Link>
            </button>
        </ProjetoContainer>
    )
}