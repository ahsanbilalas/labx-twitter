import { FC } from "react";

interface BookmarksProps {}

const Bookmarks: FC<BookmarksProps> = () => {
  return (
    <svg
      className="mr-4 h-6 w-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
    </svg>
  );
};

export default Bookmarks;
