import { FC } from "react";
import { Link } from "react-router-dom";

interface AvatarProps {
    photo: string;
    fullName: string;
    userTwitterId: string;
    handleClick?: (name: string) => void;
}

const Avatar: FC<AvatarProps> = ({ handleClick, photo, fullName, userTwitterId }) => {
  const onClick = (e:any) => {
    e.preventDefault();
    if(handleClick)
      handleClick(fullName);
  }
  return (
    <Link to="/" className="flex-shrink-0 group block" onClick={onClick}>
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={photo}
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-base leading-6 font-medium text-primary">
            {fullName}
          </p>
          <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
            {userTwitterId}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Avatar;
