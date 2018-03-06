// $(document).ready(function() {


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9lkXWDXDgzL4-_C9BlIdwX7Gk5jfH33w",
    authDomain: "jeopardy-d8b0c.firebaseapp.com",
    databaseURL: "https://jeopardy-d8b0c.firebaseio.com",
    projectId: "jeopardy-d8b0c",
    storageBucket: "jeopardy-d8b0c.appspot.com",
    messagingSenderId: "630242489436"
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth().signInWithRedirect(provider);

  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  // firebase.auth().signOut().then(function() {
  //   // Sign-out successful.
  // }).catch(function(error) {
  //   // An error happened.
  // });

// observer to check and see if a user is signed in.
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
  });

// variables
  var database = firebase.database();
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }

// });
