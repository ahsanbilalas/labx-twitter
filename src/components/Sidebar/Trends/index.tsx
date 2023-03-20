import { FC, Fragment } from "react";
import map from "lodash/map";
import range from "lodash/range";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store";
import { redirectHashtags } from "store/thunks/hashtags";

interface TrendsProps {}

const Trends: FC<TrendsProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl w-48 font-semibold text-primary">
            Trends for you
          </h2>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <Link
            to=""
            className=" text-2xl rounded-full text-primary hover:bg-gray-100 hover:text-gray-800 float-right"
          >
            <svg
              className="m-2 h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </Link>
        </div>
      </div>

      <hr className="border-gray-800" />
      {map(range(1, 6), (val) => {
        const keyword = faker.random.words();
        return (
          <Fragment key={val}>
            <div
              className="flex cursor-pointer hover:bg-gray-50"
              onClick={() => dispatch(redirectHashtags(keyword))}
            >
              <div className="flex-1">
                <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
                  {val}.{" "}
                  <span className="capitalize">
                    {faker.helpers.arrayElement([
                      "business",
                      "politics",
                      "finance",
                      "fintech",
                      "adventure",
                      "science",
                      "tech",
                    ])}
                  </span>{" "}
                  Trending
                </p>
                <h2 className="px-4 ml-2 w-48 font-bold text-primary">
                  #{keyword}
                </h2>
                <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
                  {faker.random.numeric(4)} Tweets
                </p>
              </div>
              <div className="flex-1 px-4 py-2 m-2">
                <Link
                  to=""
                  className=" text-2xl rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-800 float-right"
                >
                  <svg
                    className="m-2 h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <hr className="border-gray-800" />
          </Fragment>
        );
      })}

      <div className="flex">
        <div className="flex-1 p-4">
          <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
        </div>
      </div>
    </div>
  );
};

export default Trends;
