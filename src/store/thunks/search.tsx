import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getSearchResults = createAsyncThunk(
    "profile/getSearchResults",
    async (keyword: string) => {
      try {
        toast(
          <>
            Fetch results against search keywords from API.<br/>
            <b>API: [GET]</b> /search/{keyword}
          </>
        );
        return {};
      } catch (e) {
        console.log({ e });
      }
    }
  );

  export const resetSearchResults = createAsyncThunk(
    "profile/resetSearchResults",
    async () => {
      try {
        toast(
          <>
            Reset search Results.<br/>
            <i>No API required.</i>
            <i>Flush the search results which already been fetched.</i>
          </>
        );
        return {};
      } catch (e) {
        console.log({ e });
      }
    }
  );