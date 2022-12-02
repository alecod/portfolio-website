import { ReactNode } from 'react';
import { SectionTitle } from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';

import { Container } from './styles';



export function Experiences() {
  return (
    <Container>
      <SectionTitle title="05 anos" description="de experiêcia"/>

      <section>
        <ExperienciaItem year='2021' title='Dev Front End' description='Lorem Inpusum Lorem Inpusum Lorem Inpusum Lorem Inusum'/>
        <ExperienciaItem year='2021' title='Dev Front End' description='Lorem Inpusum Lorem Inpusum Lorem Inpusum Lorem Inusum'/>
        <ExperienciaItem year='2021' title='Dev Front End' description='Lorem Inpusum Lorem Inpusum Lorem Inpusum Lorem Inusum'/>
        <ExperienciaItem year='2021' title='Dev Front End' description='Lorem Inpusum Lorem Inpusum Lorem Inpusum Lorem Inusum'/>
      </section>
    </Container>
  );
}
