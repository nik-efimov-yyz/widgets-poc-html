import { createContext } from "react";
import { createDispatchHook, createSelectorHook, ReactReduxContextValue } from "react-redux";
import { RootState } from ".";

export const instacartContext = createContext<ReactReduxContextValue>(null as any)

export const useInstacartSelector = createSelectorHook<RootState>(instacartContext)
export const useInstacartDispatch = createDispatchHook(instacartContext)