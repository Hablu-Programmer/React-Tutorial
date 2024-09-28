import { FC, useState } from "react";
import { SectionTitle } from "~/common";
import { Arrow } from "~/icon";

interface IFaqCard {
  q: string;
  a: string;
  isActive?: boolean;
  onClick: () => void;
}
const FaqCard: FC<IFaqCard> = ({ a, q, isActive, onClick }) => {
  return (
    <div className="shadow-faq w-full rounded-[20px] px-5 md:px-[30px] py-5 bg-white">
      <button
        onClick={onClick}
        className="w-full inline-flex justify-between items-center gap-5"
      >
        <h1 className="font-bold text-start text-lg lg:text-[26px] lg:leading-[36.4px] text-accent">
          {q}
        </h1>

        <div className="text-primary">
          <Arrow className={isActive ? "-rotate-90" : "rotate-90"} />
        </div>
      </button>
      {isActive && (
        <p className="tracking-[2%] text-sm sm:text-base text-accent max-w-[807px] pt-5">
          {a}
        </p>
      )}
    </div>
  );
};

export const Faq = () => {
  const [active, setActive] = useState(1);

  const handleChange = (index: number) => {
    if (active === index) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };

  return (
    <section className="w-full mt-[50px] sm:mt-[80px] lg:mt-[100px] xl:mt-[150px] relative">
      <div className="w-full max-w-[982px] mx-auto px-2.5">
        <SectionTitle gradient="Asked Questions">Frequently </SectionTitle>

        <div className="pt-10 space-y-5 relative z-10">
          {faqs.map((faq, i) => (
            <FaqCard
              key={i}
              isActive={active === i}
              onClick={() => handleChange(i)}
              {...faq}
            />
          ))}
        </div>
      </div>
      <img
        src="/faq-bg-line.svg"
        alt="Faq Bg Line"
        className="absolute z-0 -top-[115px] -left-[540px] 2xl:-left-[23.8%] h-[590px] !w-[1713px]"
      />
    </section>
  );
};

const faqs = [
  {
    q: "Is my data secure?",
    a: "We cover a wide range of documents, including contracts, NDAs, compliance reports, and more. ",
  },
  {
    q: "What types of documents can Ai GoverningDocs generate?",
    a: "We cover a wide range of documents, including contracts, NDAs, compliance reports, and more. ",
  },
  {
    q: "Can I customize the documents?",
    a: "We cover a wide range of documents, including contracts, NDAs, compliance reports, and more. ",
  },
];
