import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Container, SectionTitle } from "~/common";
import { Star } from "~/icon";

export interface IReviewCard {
  onClick?: () => void;
  active: boolean;
  image: string;
  name: string;
  type: string;
}

const ReviewCard: FC<IReviewCard> = (props) => {
  const { onClick, active, image, name, type } = props || {};

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex justify-start items-center border border-primary rounded-[20px] py-[1px] px-5 gap-[13px] w-full md:w-[300px] lg:w-[400px] xl:w-[491px]",
        active && "bg-gradient-primary"
      )}
    >
      <img src={image} alt="David" className="rounded-full" />
      <div className={cn("font-semibold text-accent", active && "text-white")}>
        <h4>{name}</h4>
        <p>{type}</p>
      </div>
    </button>
  );
};

export const Reviews = () => {
  const [active, setActive] = useState(1);

  const activeReview = reviews[active];

  return (
    <section className="w-full bg-[#F6F6F6] py-10 lg:py-20 my-[50px] sm:my-[80px] lg:my-[100px] xl:my-[150px]">
      <Container>
        <SectionTitle gradient="Reviews From">Our Client</SectionTitle>

        <div className="pt-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-[93px]">
          {/* Reviews lime */}
          <div className="flex gap-5 w-full">
            <div className="bg-[#E2DED8] w-[5px] rounded-[20px] flex flex-col justify-between">
              <div className="flex flex-col justify-between gap-[15px]">
                {Array.from(Array(3).keys()).map((el) => (
                  <div
                    key={el}
                    className={cn(
                      "w-[5px] rounded-[20px] h-[92px] bg-gradient-primary",
                      active !== el && "bg-transparent"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Review List */}
            <div className="space-y-[15px] flex-grow">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between h-fit w-full"
                >
                  <ReviewCard
                    active={active === i}
                    onClick={() => setActive(i)}
                    {...review}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Review Details */}
          <div className="space-y-3.5 sm:space-y-5 lg:space-y-[30px] w-full pl-10 md:pl-0">
            <h3 className="font-bold text-lg sm:text-xl lg:text-[30px]">
              {activeReview.review.title}
            </h3>
            <div className="flex justify-start items-center gap-[5px]">
              {Array.from(Array(activeReview.review.stars).keys()).map((el) => (
                <Star key={el} />
              ))}
            </div>
            <p className="font-nunito-sans text-sm sm:text-base text-accent max-w-[500px]">
              {activeReview.review.details}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

const reviews = [
  {
    name: "David",
    image: "david.png",
    type: "Happy Client",
    review: {
      stars: 4,
      title: "Highly Recommend!",
      details: "The service was user-friendly and met all my expectations.",
    },
  },
  {
    name: "John Smith",
    image: "john-smith.png",
    type: "Happy Client",
    review: {
      stars: 5,
      title: "It Was An Amazing Experience!",
      details:
        "The AI features saved us countless hours and ensured our compliance was spot on.",
    },
  },
  {
    name: "Ronald Richards",
    image: "ronald-richards.png",
    type: "Happy Client",
    review: {
      stars: 5,
      title: "Outstanding Support!",
      details: "The customer support team was quick to resolve my issues.",
    },
  },
];
