import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const openTweetModal = createAsyncThunk(
  "profile/openTweetModal",
  async () => {
    try {
      toast(
        <>
          Open Modal to create a new Tweet.
          <br />
          No API required.
        </>
      );
      return {};
    } catch (e) {
      console.log({ e });
    }
  }
);

export const openPostComments = createAsyncThunk(
    "profile/openPostComments",
    async () => {
      try {
        toast(
          <>
            Open Comments panel for post
            <br />
            No API required.
          </>
        );
        return {};
      } catch (e) {
        console.log({ e });
      }
    }
  );


export const openRetweet = createAsyncThunk(
    "profile/openRetweet",
    async () => {
      try {
        toast(
          <>
            Trigger API call to retweet the post
            <br />
            <b> API [GET] </b> /tweet/:id/retweet
          </>
        );
        return {};
      } catch (e) {
        console.log({ e });
      }
    }
  );

  export const likePost = createAsyncThunk(
    "profile/likePost",
    async () => {
      try {
        toast(
          <>
            Trigger API call to like the post
            <br />
            <b> API [GET] </b> /tweet/:id/like/
          </>
        );
        return {};
      } catch (e) {
        console.log({ e });
      }
    }
  );

  export const sharePost = createAsyncThunk(
    "profile/sharePost",
    async () => {
      try {
        toast(
            <>
            Trigger API call to share the post
            <br />
            <b> API [GET] </b> /tweet/:id/share/
          </>
        );
        return {};
      } catch (e) {
        console.log({ e });
      }
    }
  );
  