import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5244/api/DailyAccounts/GetUserDetails")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <li key={userObj.userDetailId}>{userObj.firstName}</li>
          ))}
      </ul>
    </main>
  );
}

export default App;
