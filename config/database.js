import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const database = getDatabase(app);

export { database, ref, set };
