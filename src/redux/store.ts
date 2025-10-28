import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { reducers } from "./mainreducers";

const resetStoreActionType = "main/resetStore";

const combinedReducer = combineReducers(reducers);

export const rootReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: { type: string }
) => {
  if (action.type === resetStoreActionType) {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const resetStore = () => {
  store.dispatch({ type: resetStoreActionType });
};

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
