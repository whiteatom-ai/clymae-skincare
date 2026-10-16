import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Thesis from '@/components/Thesis';
import Collection from '@/components/Collection';
import Quiz from '@/components/Quiz';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <Collection />
        <Quiz />
      </main>
      <Footer />
    </>
  );
}
