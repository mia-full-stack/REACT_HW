import { createSlice } from "@reduxjs/toolkit";

import mockUsersList from "../../data/mockUsersList";

const usersSlice = createSlice({
    name: "users",
    initialState: mockUsersList,
    reducers: {

    }
});

export default usersSlice.reducer;