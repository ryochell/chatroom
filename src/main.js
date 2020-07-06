import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyApfL3yW8KJryQ2nSksjF1OytLz9xiSQtY",
  authDomain: "chat-app-47b1c.firebaseapp.com",
  databaseURL: "https://chat-app-47b1c.firebaseio.com",
  projectId: "chat-app-47b1c",
  storageBucket: "chat-app-47b1c.appspot.com",
  messagingSenderId: "30868828513",
  appId: "1:30868828513:web:073b15fd5e0e2782731520"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
