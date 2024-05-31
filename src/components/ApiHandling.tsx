import { Box, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const ApiHandling = () => {
  const [userData, setUserData] = useState<any[]>([]);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <div className="">
    <h2 className="text-center fs-1 font-bold text-danger">Api PlayGround(Fetch Data)</h2>
    </div>
          <br />
          <br />
      <Box>
        <Button
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={fetchData}
          variant="contained"
          color="primary"
        >
          get data
        </Button>
        <Button
          sx={{ margin: 1, textTransform: "capitalize" }}
          variant="contained"
          color="primary"
          disabled
        >
          post data
        </Button>
        <Button
          sx={{ margin: 1, textTransform: "capitalize" }}
          variant="contained"
          color="primary"
          disabled
          
        >
          put data
        </Button>
        <Button
          sx={{ margin: 1, textTransform: "capitalize" }}
          variant="contained"
          color="primary"
          disabled
        >
          delete data
        </Button>
      </Box>

      <div className="container">
        <div className="mt-3">
          {/* <h2 className="text-center fs-1 font-bold text-warning">Api PlayGround(Fetch Data)</h2>
          <br />
          <br /> */}
          <table className="table fs-6">
            <thead>
              <tr>
                <th className="font-bold fs-5 mt-5">ID</th>
                <th className="font-bold fs-5">Name</th>
                <th className="font-bold fs-5">UserName</th>
                <th className="font-bold fs-5">Email</th>
                <th className="font-bold fs-5">Zip Code</th>
                <th className="font-bold fs-5">Phone</th>
              </tr>
            </thead>
            <tbody className="">
              {userData.map((user, index) => (
                <tr key={index}>
                <td className="text-dark fs-6">{user.id}</td>
                <td className="text-info fs-6">{user.name}</td>
                <td className="text-primary fs-6">{user.username}</td>
                <td className="text-warning fs-6">{user.email}</td>
                <td className="text-danger fs-6">{user.address.zipcode}</td>
                <td className="text-info fs-6">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  
};


export default ApiHandling;
