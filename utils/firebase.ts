import { FirebaseOptions, initializeApp } from "firebase/app";
import { DatabaseReference, getDatabase, ref } from "firebase/database";
import { CharacterJSON } from "../models";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://portfolio-c648b-default-rtdb.firebaseio.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const dbPaths = [
  "characters",
  "names",
  "classes",
  "races",
  "backgrounds",
  "descriptions",
  "wordfilter",
];

const dbref: {
  [path: string]: DatabaseReference;
} = { root: ref(db) };

for (const path of dbPaths) {
  dbref[path] = ref(db, path);
}

export { dbref };
