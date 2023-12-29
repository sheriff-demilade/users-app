import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          setListOfUSer(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    fetchUsers();
  }, []);

  return (
    <div className="mt-5 mx-3">
      <h1 className="text-center mb-5">List Of Users</h1>

      <div className="d-flex flex-wrap">
        {listOfUSer.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;
