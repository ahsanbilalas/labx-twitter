import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getProfilePageDetails = createAsyncThunk(
  "profile/getDetails",
  async () => {
    try {
      toast(
        <>
          Fetch details of visited profile (LabXchange) from API.
          <br />
          <b>API: [GET]</b> /profile/LabXchange
        </>
      );
      return {};
    } catch (e) {
      console.log({ e });
    }
  }
);

export const getFeeds = createAsyncThunk("profile/getFeeds", async () => {
  try {
    toast(
      <>
        Fetch feeds of visited profile (LabXchange) from API.
        <br />
        <b>API: [GET]</b> /profile/LabXchange/feeds?page=1
      </>
    );
    return {};
  } catch (e) {
    console.log({ e });
  }
});

export const getProfilePageMedia = createAsyncThunk(
  "profile/getProfilePageMedia",
  async () => {
    try {
      toast(
        <>
          Fetch media listing of visited profile (LabXchange) from API.
          <br />
          <b>API: [GET]</b> /profile/LabXchange/media?page=1
        </>
      );
      return {};
    } catch (e) {
      console.log({ e });
    }
  }
);

export const getMediaPost = createAsyncThunk(
  "profile/getMediaPost",
  async (postId: number) => {
    try {
      toast(
        <>
          Fetch a post of visited profile (LabXchange) from API.
          <br />
          <b>API: [GET]</b> /profile/LabXchange/post/{postId}
        </>
      );
      return {};
    } catch (e) {
      console.log({ e });
    }
  }
);

export const openProfile = createAsyncThunk("profile/openProfile", async (name: string) => {
  try {
    toast(
      <>
        Flush the details of existing profile.
        <br />
        Fetch details of new hashtags/keywords from search API.
        <br />
        <b>API: [GET]</b> /profile/{encodeURI(name)}
      </>
    );
    return {};
  } catch (e) {
    console.log({ e });
  }
});


export const followProfile = createAsyncThunk("profile/followProfile", async (name: string) => {
  try {
    toast(
      <>
        Follow a profile
        <br />
        <b>API: [GET]</b> /profile/{encodeURI(name)}/follow
      </>
    );
    return {};
  } catch (e) {
    console.log({ e });
  }
});
