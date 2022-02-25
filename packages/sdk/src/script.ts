import { InstacartSDK } from "./sdk";

declare global {
  interface Window { instacart: InstacartSDK; }
}

window.instacart = new InstacartSDK()

