import { FC } from "react";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
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
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>
  );
};

export default Profile;
