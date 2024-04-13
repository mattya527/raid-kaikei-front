import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import AddEvent from './pages/AddEvent';
import EditPay from './pages/EditPay';
import ListEvent from './pages/ListEvent';
import ParticipationApproval from './pages/ParticipationApproval';

import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [messsage, setMessage] = useState("");
  const [error , setError] = useState("");
  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: "https://localhost:5173" });
        }
        const idToken = liff.getIDToken();
        console.log(idToken); // print raw idToken object
        setMessage("LIFF init succeeded.");
      })
      .catch((e) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });
  
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<ListEvent />} />
          <Route path="/edit" element={<EditPay />} />
          <Route path="/add" element={<AddEvent />} />
          <Route path="/approval" element={<ParticipationApproval />} />
        </Routes>
        {/* <Footer /> */}
      </div>
  );
}

export default App;
