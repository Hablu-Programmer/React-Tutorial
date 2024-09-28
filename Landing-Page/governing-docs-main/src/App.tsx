import { Hero, ProblemSolution, Reviews, Partners, Faq, Note } from "~/home";
import { Footer, Navbar } from "~/shared";

const App = () => {
  return (
    <main className="font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top ">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Reviews />
      <Partners />
      <Faq />
      <Note />
      <Footer />
    </main>
  );
};

export default App;
