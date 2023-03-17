import React, { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LeftSidebar from "components/Sidebar/UserNav";
import Search from "components/Sidebar/Search";
import Recommendation from "components/Sidebar/Media";
import Trends from "components/Sidebar/Trends";
import FollowingRecommendation from "components/Sidebar/FollowingRecommendation";
import Footer from "components/Footer";
import { useAppDispatch } from "store";
import { getProfileRecommendations, getTrendingTopics, getUserProfile } from "store/thunks/auth";
import { getFeeds, getProfilePageDetails, getProfilePageMedia } from "store/thunks/profile";

const DashboardLayout: FC<any> = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserProfile())
    dispatch(getTrendingTopics())
    dispatch(getProfileRecommendations())
    dispatch(getProfilePageDetails());
    dispatch(getFeeds())
    dispatch(getProfilePageMedia());
  }, [dispatch])
  return (
    <>
      <div className="p-relative h-screen bg-[#fff]">
        <div className="flex justify-center">
          <LeftSidebar />
          <main role="main">
            <div className="flex w-[990px]">
              <Outlet />
              <aside className="w-2/5 h-12 position-relative">
                <div className="max-w-[350px]">
                  <div className="overflow-y-auto fixed  h-screen">
                    <Search />
                    <Recommendation />
                    <Trends />
                    <FollowingRecommendation />
                    <Footer />
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={10000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </>
  );
};

export default DashboardLayout;
