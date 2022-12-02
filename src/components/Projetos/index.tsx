
import { SectionTitle } from '../SectionTitle';
import ProjetosItem from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link'

export function Projetos() {
  return (
    <Container>
     <SectionTitle title="Ultimos Projetos"/>

    <section>
        <ProjetosItem />
        <ProjetosItem />
        <ProjetosItem />
    </section>
    <button type="button">
      <Link  href="/projetos">
        <a>Ver todos os projetos</a>
      </Link>
    </button>

    </Container>
  );
}
