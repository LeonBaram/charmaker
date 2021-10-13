import { FirebaseOptions, initializeApp } from "firebase/app";
import { DatabaseReference, getDatabase, ref } from "firebase/database";

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

// const pathref = path => firebase.database().ref(path);
// const dbref = (path: string) => ref(db, path);

const dbSections = [
  "characters",
  "default_names",
  "classes",
  "races",
  "backgrounds",
  "descriptions",
];

const dbref: {
  [path: string]: DatabaseReference;
} = { root: ref(db) };

for (const section of dbSections) {
  dbref[section] = ref(db, section);
}

export { dbref };
