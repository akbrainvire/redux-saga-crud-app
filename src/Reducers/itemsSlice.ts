import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    fetchItem: (state: any) => {
      // console.log("called fetchItem");
    },
    fetchDataSuccess: (state: any, action: any) => {
      state.items = [...action.payload];
    },
    addItemData: (state: any, payload: any) => {
      // console.log(state, "state");
      // console.log("Add Item", payload);
    },
    addItemSuccess: (state: any, action: any) => {
      console.log(action.payload);

      state.items.push(action.payload.data);
    },
    removeItemData: (state: any, action: any) => {
      console.log("remove");
    },
    removeItemSuccess: (state: any, action: any) => {
      // console.log(action.payload, "remove item sucess");
      // console.log(current(state));
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },
    editItemData: (state: any, action: any) => {
      // console.log("called editItem");
    },
    editDataSuccess: (state: any, action: any) => {
      let i = null;
      // console.log(action.payload.id, "id");
      state.items.find((item: any, index: any) => {
        if (item.id === action.payload.id) {
          return (i = index);
        } else {
          return null;
        }
      });

      if (i !== null) state.items[i] = action.payload;
      else return;
      // console.log(i, updatedUser, "index");
      // console.log(
      //   "enter in editdatasuccess",
      //   current(updatedUser),
      //   state.items[updatedUser]
      // );
      // console.log(state.items[i]);
      // state.items[updatedUser] = action.payload;
      // state.items = [...state.items, updatedUser];
    },
  },
});

export const {
  fetchItem,
  fetchDataSuccess,
  addItemSuccess,
  removeItemSuccess,
  removeItemData,
  editDataSuccess,
  editItemData,
  addItemData,
} = itemsSlice.actions;
export default itemsSlice.reducer;
