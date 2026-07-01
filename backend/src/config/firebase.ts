import { applicationDefault, initializeApp, getApps } from "firebase-admin/app";

if (!getApps().length) {
  initializeApp({
    credential: applicationDefault(),
  });
}