
import { SectionTitle } from '../SectionTitle';
import ProjetosItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link'

export function Projetos() {
  return (
    <Container>
     <SectionTitle title="Ultimos Projetos"/>

    <section>
        <ProjetosItem img="https://nubank.com.br/images-cms/1668630922-home_bolao_desk.jpg?w=1152&dpr=1&auto=compress&fm=webp" title="Projeto 01" type="website" slug="teste"/>
        <ProjetosItem img="https://nubank.com.br/images-cms/1668630922-home_bolao_desk.jpg?w=1152&dpr=1&auto=compress&fm=webp" title="Projeto 01" type="website" slug="teste"/>
        <ProjetosItem img="https://nubank.com.br/images-cms/1668630922-home_bolao_desk.jpg?w=1152&dpr=1&auto=compress&fm=webp" title="Projeto 01" type="website" slug="teste"/>
    </section>
    <button type="button">
      <Link  href="/projetos">
        <a>Ver todos os projetos</a>
      </Link>
    </button>

    </Container>
  );
}
