import {ProjetoContainer} from './styles'
import Link from 'next/link'
import {AiOutlineRightCircle} from 'react-icons/ai'


interface ProjetoProps {
    title: string;
    img: string;
    slug: string;
    type: string;
}

export default function ProjetosItem({title, slug, img, type}: ProjetoProps) {
    return (
        <ProjetoContainer imgUrl={img}>
            <section>
                <div className='overlay'/>
                <div className='text'>
                    <h1>{title}</h1>
                    <h2>- {type}</h2>
                </div>
            </section>
            <button type='button'>
                <Link href={`/projetos/${slug}`}>
                    <a>Ver Mais <AiOutlineRightCircle /></a>
                    
                </Link>
            </button>
        </ProjetoContainer>
    )
}