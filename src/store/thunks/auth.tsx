import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getUserProfile = createAsyncThunk(
  "users/getUserProfile",
  async () => {
    try {
      toast(
        <>
          Fetch logged-in user profile from API.<br/>
          <b>API: [GET]</b> /user/profile
        </>
      );
      return {};
    } catch (e) {
      console.log({ e });
    }
  }
);


export const getTrendingTopics = createAsyncThunk(
  "users/getTrendingTopics",
  async () => {
    try {
      toast(
        <>
          Fetch Trending Topics.<br/>
          <b>API: [GET]</b> /trending
        </>
      );
      return {};
    } catch (e) {
      console.log({ e });
    }
  }
);

export const getProfileRecommendations = createAsyncThunk(
  "users/getProfileRecommendations",
  async () => {
    try {
      toast(
        <>
          Fetch Who to follow.<br/>
          <b>API: [GET]</b>  /recommendation/profile
        </>
      );
      return {};
    } catch (e) {
      console.log({ e });
    }
  }
);

