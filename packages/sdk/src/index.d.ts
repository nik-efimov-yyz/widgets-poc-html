import { InstacartSDKOptions } from "./sdk";
import { InstacartReduxStore } from "./store";

export interface InstacartSDK {
  init: (options: InstacartSDKOptions) => void
  store: InstacartReduxStore
}

