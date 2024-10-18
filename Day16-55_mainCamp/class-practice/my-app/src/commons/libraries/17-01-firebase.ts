// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFXGkqAP4JH0DxAT8-yCpp40hWV6V8VMk',
  authDomain: 'sesac-test-a4853.firebaseapp.com',
  projectId: 'sesac-test-a4853',
  storageBucket: 'sesac-test-a4853.appspot.com',
  messagingSenderId: '669251306811',
  appId: '1:669251306811:web:8109ca747df80d41e2e31e',
};

// Initialize Firebase : 접속하는 것
export const firebaseApp = initializeApp(firebaseConfig);
