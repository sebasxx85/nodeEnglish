import admin from 'firebase-admin';
import bcrypt from 'bcrypt';

// Inicialización robusta para emulador y producción
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: process.env.GCLOUD_PROJECT || 'nodejs-english'
  });
}

// Si existe FIRESTORE_EMULATOR_HOST, fuerza conexión al emulador
if (process.env.FIRESTORE_EMULATOR_HOST) {
  process.env.FIRESTORE_EMULATOR_HOST =
    process.env.FIRESTORE_EMULATOR_HOST;
}

const db = admin.firestore();
const usersCollection = db.collection('users');

// Obtener todos los usuarios
export const getUsers = async () => {
  const snapshot = await usersCollection.get();

  return snapshot.docs.map(doc => {
    const { password, ...user } = doc.data();
    return user;
  });
};

// Buscar usuario por nombre
export const findUser = async (name) => {
  const snapshot = await usersCollection
    .where('name', '==', name)
    .limit(1)
    .get();

  if (snapshot.empty) return null;

  return snapshot.docs[0].data();
};

// Crear usuario
export const addUser = async (user, email, password) => {
  const existing = await findUser(user);
  if (existing) return null;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = {
    name: user,
    email,
    password: hashedPassword,
    avatar: `https://robohash.org/${user}.png`,
    score: 0,
    language: 'English',
    subscription_status: 'inactive',
    createdAt: new Date()
  };

  await usersCollection.add(newUser);

  const { password: _, ...safeUser } = newUser;
  return safeUser;
};