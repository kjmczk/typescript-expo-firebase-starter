import * as firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './firebaseConfig';

type AuthWithEmail = (
  email: string,
  password: string
) => Promise<firebase.auth.UserCredential>;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const loginWithEmail: AuthWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail: AuthWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const logout = (): Promise<void> => auth.signOut();

export const passwordReset = (email: string): Promise<void> =>
  auth.sendPasswordResetEmail(email);
