import { ReactNode } from 'react';
import { SectionTitle } from '../SectionTitle';

import { Container } from './styles';



export function FormContato() {
  return (
    <Container>
      <SectionTitle 
        title={
            <>
                Precisa dos 
                <br/>
                meus serviços
            </>
        }
        description={
            <>
                Preencha o formulario abaixo
                <br/>
                irei retornar em breve
            </>
        }
      />
    </Container>
  );
}
