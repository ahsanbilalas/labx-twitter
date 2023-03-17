import { FC } from "react";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  return (
    <svg
      className="mr-4 h-6 w-6"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
    </svg>
  );
};

export default Explore;
