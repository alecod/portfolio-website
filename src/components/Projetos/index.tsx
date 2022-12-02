
import { SectionTitle } from '../SectionTitle';
import ProjetosItem from './ProjetoItem';
import { Container } from './styles';

export function Projetos() {
  return (
    <Container>
     <SectionTitle title="Ultimos Projetos"/>

    <section>
        <ProjetosItem />
    </section>
    </Container>
  );
}
