// saga.ts
import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchDataSuccess,
  addItemSuccess,
  removeItemSuccess,
  fetchItem,
  addItemData,
  removeItemData,
  editItemData,
  editDataSuccess,
} from "../Reducers/itemsSlice";
import { createUser, deleteUser, getUser, updateUser } from "../api";

function* fetchData(): any {
  try {
    const value = yield call(getUser);
    // console.log(value);
    const response = value.data;
    // console.log(response, "res");
    yield put(fetchDataSuccess(response));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* addItem(action: any): any {
  try {
    console.log(action.payload);
    // const { name, username, email } = action.payload;
    const newItem = yield call(createUser, action.payload);
    yield put(addItemSuccess(newItem));
  } catch (error) {
    console.error("Error adding item:", error);
  }
}

function* removeItem(action: any) {
  try {
    console.log(action.payload);
    yield call(deleteUser, action.payload);
    yield put(removeItemSuccess(action.payload));
  } catch (error) {
    console.error("Error removing item:", error);
  }
}

function* editItem(action: any): any {
  try {
    const user = yield call(updateUser, action.payload);
    // console.log(user, action.payload, "user-saga");
    yield put(editDataSuccess(user.data));
  } catch (error) {
    console.log("error while editing", error);
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchItem, fetchData);
  yield takeLatest(addItemData, addItem);
  yield takeLatest(removeItemData, removeItem);
  yield takeLatest(editItemData, editItem);
}
