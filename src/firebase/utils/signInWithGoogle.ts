import firebase, { auth, googleAuthProvider } from '../index'

export const signInWithGoogle = (): Promise<firebase.User> => {   
    return new Promise<firebase.User> ((resolve, reject) => {
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
        auth.signInWithRedirect(googleAuthProvider);

        })
        .then((user) => {   
            resolve(user as any); 
        })
    });
}