import { FC } from "react";
import map from "lodash/map";
import range from "lodash/range";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { getImageStyle } from "utils";
import { useAppDispatch } from "store";
import { getMediaPost } from "store/thunks/profile";

interface MediaProps {}

const Media: FC<MediaProps> = () => {
  const dispatch = useAppDispatch();
  const handleClick = (e: any, postId: number) => {
    e.preventDefault();
    dispatch(getMediaPost(postId))
  }
  return (
    <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4">
      <div className="grid grid-rows-2 grid-flow-col gap-1">
        {map(range(6), (val: number) => (
          <Link key={val} to="/" target="#" className="mr-1" onClick={(e: any) => handleClick(e, val)}>
            <div
              className="w-full bg-cover bg-no-repeat bg-center h-[100px]"
              {...getImageStyle(faker.image.imageUrl(300, 300, "physics", true))}
            >
              <img className="opacity-0" src={faker.image.imageUrl()} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Media;
