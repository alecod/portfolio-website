import { Experiences } from "../components/Experiences";
import { Header } from "../components/Header";
import { HomeHero } from "../components/HomeHero";
import { Projetos } from "../components/Projetos";
import { HomeContainer } from '../styles/homeStyles'

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projetos />
      </main>
    </HomeContainer>
  );
}
