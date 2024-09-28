import { FC } from "react";
import { Container, SectionTitle } from "~/common";
import { Arrow } from "~/icon";

const Header = () => (
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5">
    <SectionTitle gradient="Solution" className="text-start">
      Problem &
    </SectionTitle>

    <div className="flex justify-center items-center gap-[15px]">
      <button className="bg-white size-10 rounded-full text-primary flex justify-center items-center shadow-arrow-btn">
        <Arrow />
      </button>
      <button className="bg-gradient-primary size-10 rounded-full flex justify-center items-center shadow-custom text-white">
        <Arrow />
      </button>
    </div>
  </div>
);

interface ICard {
  image: string;
  title: string;
  des1: string;
  des2?: string;
}

const Card: FC<ICard> = ({ image, title, des1, des2 }) => (
  <div className="transition-colors duration-200 w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 shadow-card hover:bg-primary group">
    <div className="bg-primary size-[58px] rounded-full flex justify-center items-center">
      <img src={image} alt={title} />
    </div>
    <h1 className="font-bold group-hover:text-white text-lg text-secondary leading-none">
      {title}
    </h1>
    <div className="text-accent space-y-2.5 group-hover:text-white">
      <p>{des1}</p>
      {des2 && <p>{des2}</p>}
    </div>
  </div>
);

export const ProblemSolution = () => {
  return (
    <section className="pt-32">
      <Container>
        <Header />

        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 lg:gap-[30px]">
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const cards: ICard[] = [
  {
    image: "/problem.svg",
    title: "Problem",
    des1: "Managing legal documents can be complex, time-consuming, and error-prone.",
    des2: "Outdated methods and manual processes put your business at risk",
  },
  {
    image: "/solution.svg",
    title: "Solution",
    des1: "Ai GoverningDocs offers a cutting-edge solution to manage, generate, and automate legal documents with ease.",
    des2: "Our AI-driven platform ensures compliance, reduces errors, and saves time.",
  },
  {
    image: "/key-features.svg",
    title: "Key Features",
    des1: "Automatically generate legal documents tailored to your specific needs.",
  },
  {
    image: "/compliance-management.svg",
    title: "Compliance Management",
    des1: "Ensure all your documents meet the latest regulatory standards.",
  },
];
