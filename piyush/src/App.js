// import { useEffect } from "react";
// import { messaging } from "./firebase";
// import { getToken } from "firebase/messaging";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   async function requestPermission() {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       // Generate Token
//       const token = await getToken(messaging, {
//         vapidKey:
//           "BKwXIsqltkgshCJYr0I_tRLMpL8ufVSH49c2IKuAQvVhnWo-1RGht4zfuj_owkVdbxgXUTD4xV0j_-M",
//       });
//       console.log("Token Gen", token);
//       // Send this token  to server ( db)
//     } else if (permission === "denied") {
//       alert("You denied for the notification");
//     }
//   }

//   useEffect(() => {
//     // Req user for notification permission
//     requestPermission();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import logo from "./logo.svg";
import "./App.css";

function App() {
  async function requestPermission() {
    console.log("Requesting notification permission...");
    const permission = await Notification.requestPermission();
    console.log("Notification permission status:", permission);

    if (permission === "granted") {
      // Generate Token
      try {
        const token = await getToken(messaging, {
          vapidKey:
            "BKwXIsYrApiQSuvC0I_tRLMpL8ufVSH49c2IKuAQvVhnWo-1RGht4zfuj_owkVdbxgXUTD4xV0j_-M",
        })
        console.log("Token Generated:", token);
        // Send this token to server (db)
      } catch (error) {
        console.error("Error generating token:", error);
      }
    } else if (permission === "denied") {
      alert("You denied the notification permission");
    }
  }

  useEffect(() => {
    // Request user for notification permission
    console.log("useEffect triggered");
    requestPermission();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

