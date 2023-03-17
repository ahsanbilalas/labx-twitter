import { FC } from "react";
import ReactTextFormat from "react-text-format";
import { Link } from "react-router-dom";
import Stats from "./Stats";

const content = `
Just a reminder of our other social accounts: 
IG https://instagram.com/labxchange/ 
Facebook
https://facebook.com/labxchange LinkedIn
https://linkedin.com/company/labxchange Youtube
https://youtube.com/c/labxchange Pinterest
https://pinterest.com/labxchange/ And of course,
http://LabXchange.org
https://user-images.githubusercontent.com/35000565/225985209-29dff7db-31c5-4dfc-9203-bc855469dabf.jpeg
`;

interface TweetProps {}

const customLinkDecorator = (
  decoratedHref: string,
  decoratedText: string,
  linkTarget: string
) => {
  return (
    <>
      <a
        href={decoratedHref}
        target={linkTarget}
        rel="noopener"
        className="customLink text-blue-400"
      >
        {decoratedText}
      </a>
      <br />
    </>
  );
};

const customImageDecorator = (decoratedURL: string) => {
  return (
    <div className="md:flex-shrink pr-6 pt-3">
      <div className="bg-cover bg-no-repeat bg-center rounded-lg w-full h-64 w-[200px]">
        <img src={decoratedURL} className="customImage w-full h-full" alt={decoratedURL} />
      </div>
    </div>
  );
};

const Tweet: FC<TweetProps> = () => {
  return (
    <article className="hover:bg-gray-100 transition duration-350 ease-in-out">
      <div className="flex flex-shrink-0 p-4 pb-0">
        <Link to="/" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium text-primary">
                LabXchange
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @LabXchange . 16 April
                </span>
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="pl-16">
        <div className="text-base width-auto font-medium text-primary flex-shrink">
          <ReactTextFormat
            allowedFormats={["URL", "Image"]}
            linkDecorator={customLinkDecorator}
            imageDecorator={customImageDecorator}
          >
            {content}
          </ReactTextFormat>
        </div>

        <Stats />
      </div>
      <hr className="border-gray-800" />
    </article>
  );
};

export default Tweet;
