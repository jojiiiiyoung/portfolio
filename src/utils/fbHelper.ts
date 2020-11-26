import firebase from "firebase/app";
import "firebase/analytics";
import EnvChecker from "./envChecker";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

export enum FBEventTypes {
  START = "START",
  CONTACTS = "CONTACTS",
}

class FBHelper {
  private static analytics: firebase.analytics.Analytics;

  public static init(): void {
    if (EnvChecker.isProduction()) {
      firebase.initializeApp(firebaseConfig);
      this.analytics = firebase.analytics();
      this.sendEvent(FBEventTypes.START, { referrer: document.referrer });

      document.addEventListener("click", (e: MouseEvent) => {
        if (e.target) {
          const event = (e.target as HTMLElement).dataset.fbEvent;
          const params = (e.target as HTMLElement).dataset.fbParams;

          if (event && params) {
            FBHelper.sendEvent(event as FBEventTypes, JSON.parse(params));
          }
        }
      });
    }
  }

  public static sendScreen(name: string): void {
    if (this.analytics) {
      this.analytics.setCurrentScreen(window.location.pathname);
      this.analytics.logEvent("page_view", {
        page_path: name,
      });
    }
  }

  public static sendEvent(
    event: FBEventTypes,
    params: { [key: string]: any }
  ): void {
    if (this.analytics) {
      this.analytics.logEvent(event, { items: params });
    }
  }
}

export default FBHelper;
