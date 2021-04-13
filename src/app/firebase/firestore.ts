import { firestore } from "./firebase";

/**
 * Obtener todos los Usuarios de la base de datos 
 * */
export const getAll = async () => {
  firestore.collection("Users").get();
};

/**
 * Obtener todos los Usuarios de la base de datos, e implanta en eschuchador de cambios 
 * */
export const getAllUser = async (setUsers: any) => {
  firestore.collection("Users").onSnapshot((querySnapshot) => {
    const docs: any[] = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setUsers(docs);
  });
};

/**
 * Añadir un nuevo usuario
 * */
export const addUser = async (user: any) => {
  await firestore.collection("Users").doc().set(user);
};

/**
 * Actualiza un usuario recibiendo su id
 * */
export const updateUser = async (user: any, id: string) => {
  await firestore.collection("Users").doc(id).update(user);
};

/**
 * Eliminar un usuario de un id dado
 **/
export const deleteUser = async (id: string) => {
  await firestore.collection("Users").doc(id).delete();
};
