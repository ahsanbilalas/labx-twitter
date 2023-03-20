import { faker } from "@faker-js/faker";
import { FC } from "react";
import map from "lodash/map";
import { Link } from "react-router-dom";
import { links } from "utils/sidebar";
import Avatar from "elements/User/Avatar";
import Button from "elements/Button";
import { useAppDispatch } from "store";
import { openTweetModal } from "store/thunks/tweet";

interface HeaderProps {}

const UserNav: FC<HeaderProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="text-primary h-12 py-4 h-auto">
      <div className="w-[275px]">
        <div className="overflow-y-auto fixed h-screen pr-3 w-[275px]">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-primary ml-3"
            fill="currentColor"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>

          <nav className="mt-5 px-2">
            {map(links, ({ to, Icon, label }) => (
              <Link
                key={label}
                to={to}
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-100 hover:text-gray-800"
              >
                <Icon />stroke-width
                {label}
              </Link>
            ))}

            <Button isFullWidth={true} onClick={() => dispatch(openTweetModal())}>
              Tweet
            </Button>
          </nav>

          <div className="absolute bottom-[2rem]">
            <div className="flex-shrink-0 flex hover:bg-gray-100 rounded-full px-4 py-3 mt-12 mr-2">
              <Avatar photo={faker.image.imageUrl(100,100, 'person', true)} fullName="Ahsan Bilal" userTwitterId="@ahsan_bilal"/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserNav;
