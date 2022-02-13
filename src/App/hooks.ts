import { RootState,RootDispatch } from "./store";

import { useSelector,useDispatch, TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = () => useDispatch<RootDispatch>();

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;