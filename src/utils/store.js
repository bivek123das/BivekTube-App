import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import themeSlice from "./themeSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
      reducer:{
        app : appSlice,
        search : searchSlice,
        theme : themeSlice,
        chat : chatSlice,
      }
})

export default store;

