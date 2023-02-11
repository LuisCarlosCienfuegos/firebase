import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
//es una promesa
// const email = "holamundo@hotmail.com";
// const password = "123456";

const create = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.error(userCredential);
    });
};

export { create };
