import Header from "components/Profile/Header";
import Tweet from "components/Tweet";

const Profile = () => {
  return (
    <section className="w-3/5 border border-y-0 border-gray-200 max-w-[600px]">
      <Header />

      <ul className="list-none">
        <li>
          <Tweet />
        </li>
      </ul>
  </section>
  );
};

export default Profile;
