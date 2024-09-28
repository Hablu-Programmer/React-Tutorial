import { nevItems } from "@/lib/db";
import { Container } from "../common";

export const Footer = () => {
  return (
    <footer className="pt-5 lg:pt-24">
      <Container>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2.5 px-[30px] py-5 bg-white rounded-full">
          <h1 className="font-space-grotesk text-2xl lg:text-3xl xl:text-4xl font-bold">
            AI GoverningDocs
          </h1>

          <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
            {nevItems.map(({ href, label }, i) => (
              <a href={href} key={i}>
                <p className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150">
                  {label}
                </p>
              </a>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2.5">
            {socialIcon.map(({ img, url }) => (
              <a href={url} key={img} target="_blank">
                <img
                  src={img}
                  alt="social media icon"
                  className="size-[36px]"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-border-top border-t border-transparent mt-[20px] md:mt-[50px] lg:mt-[106px]">
          <p className="text-center text-sm sm:text-lg leading-[18px] text-[#111111] py-5 border-t ">
            Ai GoverningDocs 2024. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

const socialIcon = [
  { img: "/fb.png", url: "https://www.facebook.com" },
  { img: "/instagram.png", url: "https://www.instagram.com" },
  { img: "/in.png", url: "https://bd.linkedin.com" },
  { img: "/x.png", url: "https://x.com" },
];
