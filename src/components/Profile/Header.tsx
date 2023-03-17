import { FC } from "react";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { useAppDispatch } from "store";
import AnchorIcon from "elements/Icons/Anchor";
import LeftArrowIcon from "elements/Icons/LeftArrow";
import Calendar from "elements/Icons/Calendar";
import Button from "elements/Button";
import { followProfile } from "store/thunks/profile";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <div className="flex justify-start">
          <div className="px-4 py-2 mx-2">
            <Link
              to="/"
              className=" text-2xl font-medium rounded-full text-blue-400 hover:bg-gray-100 hover:text-gray-800 float-right"
            >
              <LeftArrowIcon />
            </Link>
          </div>
          <div className="mx-2">
            <h2 className="mb-0 text-xl font-bold text-primary">LabXchange</h2>
            <p className="mb-0 w-48 text-xs text-gray-400">
              {faker.random.numeric(4)} Tweets
            </p>
          </div>
        </div>

        <hr className="border-gray-800" />
      </div>
      <div>
        <div
          className="w-full bg-cover bg-no-repeat bg-center h-[200px]"
          style={{
            backgroundImage:
              'url("https://pbs.twimg.com/profile_banners/991401647439073280/1654873028/1500x500")',
          }}
        >
          <img
            className="opacity-0 w-full h-full"
            src="https://pbs.twimg.com/profile_banners/991401647439073280/1654873028/1500x500"
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="relative flex w-full">
            <div className="flex flex-1">
              <div className="mt-[-6rem]">
                <div className="md rounded-full relative avatar h-[9rem] w-[9rem]">
                  <img
                    className="h-[9rem] w-[9rem] md rounded-full relative border-4 border-gray-900"
                    src="https://pbs.twimg.com/profile_images/1017100581272506373/EnSAOp7K_400x400.jpg"
                    alt=""
                  />
                  <div className="absolute"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col text-right">
              <Button color="white" onClick={() => dispatch(followProfile("LabXchange"))}>
                Follow
              </Button>
            </div>
          </div>

          <div className="space-y-1 justify-center w-full mt-3 ml-3">
            <div>
              <h2 className="text-xl leading-6 font-bold text-primary">
                LabXchange
              </h2>
              <p className="text-sm leading-5 font-medium text-gray-600">
                @LabXchange
              </p>
            </div>

            <div className="mt-3">
              <p className="text-primary leading-tight mb-2">
                The world's science classroom. Built at @harvard , supported by
                @amgenfoundation . Create your free account today:
                http://bit.ly/3awiD8f
              </p>
              <div className="text-gray-600 flex">
                <span className="flex mr-2">
                  <AnchorIcon />{" "}
                  <Link
                    to="https://ricardoribeirodev.com/personal/"
                    target="#"
                    className="leading-5 ml-1 text-blue-400"
                  >
                    labxchange.org
                  </Link>
                </span>
                <span className="flex mr-2">
                  <Calendar />{" "}
                  <span className="leading-5 ml-1">Joined December, 2019</span>
                </span>
              </div>
            </div>
            <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
              <div className="text-center pr-3">
                <span className="font-bold text-primary">520</span>
                <span className="text-gray-600"> Following</span>
              </div>
              <div className="text-center px-3">
                <span className="font-bold text-primary">23,4m </span>
                <span className="text-gray-600"> Followers</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-800" />
      </div>
    </>
  );
};

export default Header;
