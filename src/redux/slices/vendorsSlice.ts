import { createSlice } from "@reduxjs/toolkit";
import data from "../../constants";

// set the initial state of the vendors slice to the VendorLists array from the constants file
const initialState = {
  vendors: data.VendorLists,
};

export const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    setVendors: (state, action) => {
      state.vendors = action.payload;
    },
  },
});

export const { setVendors } = vendorsSlice.actions;
export default vendorsSlice.reducer;
