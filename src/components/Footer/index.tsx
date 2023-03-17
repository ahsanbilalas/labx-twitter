import { FC } from "react";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="flow-root m-6 inline">
      <div className="flex-1">
        <Link to="/">
          <p className="text-sm leading-6 font-medium text-gray-500">
            Terms Privacy Policy Cookies Imprint Ads info
          </p>
        </Link>
      </div>
      <div className="flex-2">
        <p className="text-sm leading-6 font-medium text-gray-600">
          {" "}
          © 2020 Twitter, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
