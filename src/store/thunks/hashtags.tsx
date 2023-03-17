import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const redirectHashtags = createAsyncThunk(
  "profile/redirectHashtags",
  async (keyword: string) => {
    try {
      toast(
        <>
          Flush the details of existing profile.<br/>
          Fetch details of new hashtags/keywords from search API.<br/>
          <b>API: [GET]</b> /{encodeURI(keyword)}
        </>
      );
      return {};
    } catch (e) {
      console.log({ e });
    }
  }
);
