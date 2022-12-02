import { ReactNode } from 'react';

import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

import picture from '../../assets/pessoa.webp'

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha Foto" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Alessandro</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className='comment'>//Minha apresentação</span>
            <span className='purple'>Infos</span> {'\u007b'}
            <div>
              Nome: <span className='blue'>Alessandro,</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Junqueira,</span>
            </div>

            {'\u007b'}
          </CodeItem>
          <CodeItem>
    
            <span className='purple'>Cargo</span> {'\u007b'}
            <div>
              Função: <span className='blue'>Front End React/Typescript</span>
            </div>
            <div>
              Empresa: <span className='blue'>Curitiba</span>
            </div>

            {'\u007b'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
