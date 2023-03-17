import { faker } from "@faker-js/faker";
import Avatar from "elements/User/Avatar";
import map from "lodash/map";
import range from "lodash/range";
import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "elements/Button";
import { followProfile, openProfile } from "store/thunks/profile";
import { useAppDispatch } from "store";

interface FolloringRecommendationProps {}

const FollowingRecommendation: FC<FolloringRecommendationProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="max-w-sm rounded-lg  bg-dim-700 overflow-hidden shadow-lg m-4">
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl w-48 font-semibold text-primary">
            Who to follow
          </h2>
        </div>
      </div>

      <hr className="border-gray-800" />
      {map(range(3), (val) => {
        const name = faker.name.fullName();
        return (
          <>
            <div key={val} className="flex flex-shrink-0">
              <div className="flex-1 flex ">
                <div className="flex items-center w-48 ml-2">
                  <Avatar
                    handleClick={() => dispatch(openProfile(name))}
                    photo={faker.image.imageUrl(100, 100, "person", true)}
                    fullName={name}
                    userTwitterId={`@${faker.name.firstName()}`}
                  />
                </div>
              </div>
              <div className="flex-1 px-4 py-2 m-2">
                <Link to="" className=" float-right">
                  <Button color="white" onClick={() => dispatch(followProfile(name))}>Follow</Button>
                </Link>
              </div>
            </div>
            <hr className="border-gray-800" />
          </>
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

export default FollowingRecommendation;
