import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, push, onValue  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
  databaseURL: "https://fitnesstracker-21e8d-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyA2IYjf-qL3EJXMDwFsqECq8QdKgO9WBic",
  authDomain: "fitnesstracker-21e8d.firebaseapp.com",
  databaseURL: "https://fitnesstracker-21e8d-default-rtdb.firebaseio.com",
  projectId: "fitnesstracker-21e8d",
  storageBucket: "fitnesstracker-21e8d.appspot.com",
  messagingSenderId: "801358869981",
  appId: "1:801358869981:web:1cd9a7c75625078a237234",
  measurementId: "G-5B24CT2GJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const auth = getAuth(app);

export function addUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userId = user.uid;
      const userRef = ref(database, 'users/' + userId);
      
      // Define the data you want to store for the user
      const userData = {
        email: user.email
      };

      // Set the user data in the database
      set(userRef, userData)
        .then(() => {
          console.log("User data saved successfully");
          window.location = 'IntroForm.html';
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
        });
    } else {
      console.log("No user logged in (redirect to signUp)");
    }
  });
}


export function addUserInfo(userInfo) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const dbRef = ref(database, 'users/' + user.uid + '/userInfo');
      console.log(dbRef)
      const userInfoRef = push(dbRef);
      set(userInfoRef, userInfo);
      window.location = 'Dashboard.html'
    } else {
      console.log("no user logged in (redirect to signUP)")
    }
  });
}

export function addFoodIntake(foodCategory, foodInfo) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid)
      const currentDate = new Date().toDateString();
      const dbRef = ref(database, 'users/' + user.uid + '/foodInfo/' + currentDate + "/" + foodCategory);
      const foodIntakeRef = push(dbRef);
      set(foodIntakeRef, foodInfo);
} else {
  console.log("no user logged in (redirect to signUP)")
}
});
}

export function addWorkoutInfo(muscleGroup, workoutInfo) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentDate = new Date().toDateString();
      const dbRef = ref(database, 'users/' + user.uid + '/workoutInfo/' + currentDate + "/" + muscleGroup);
      const workoutRef = push(dbRef);
      set(workoutRef, workoutInfo);
    } else {
      console.log("no user logged in (redirect to signUP)")
    }
  });
}

export function getAllItems(category) {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const userRef = ref(database, 'users/' + userId + '/' + category);

        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const itemsArray = [];
            for (let key in data) {
              itemsArray.push({ id: key, ...data[key] });
            }
            resolve(itemsArray);
          } else {
            resolve([]); // Resolve with an empty array if no data
          }
        }, (error) => {
          console.error("Error fetching data:", error);
          reject(error);
        });
      } else {
        console.log("No user logged in (redirect to signUp)");
        reject(new Error("No user logged in"));
      }
    });
  });
}




export function signInWithEmailPassword(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error.message);
    });

};

export function LoginWithEmailPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User signed in:', user);
    window.location = 'Dashboard.html'
  })
  .catch((error) => {
    console.log('Error during sign-in:', error.message);
  });
};
