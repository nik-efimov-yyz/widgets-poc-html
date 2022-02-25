import { combineReducers, configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: { ready: false, cart: [] as string[] },
  reducers: {
    appReady: (state) => { state.ready = true },
    clear: state => { state.cart = [] },
    addItem: (state, action: PayloadAction<string>) => {
      state.cart.push(action.payload)
    }
  }
})

const rootReducer = combineReducers({ app: appSlice.reducer })

export const store = configureStore({
  reducer: rootReducer,
  devTools: { name: "widgets" }
})

export type InstacartReduxStore = typeof store

export type RootState = ReturnType<typeof rootReducer>

export const actions = {
  app: {
    ...appSlice.actions
  }
}