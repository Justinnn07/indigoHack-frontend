import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import { randomString } from "../../utils";
import axios from "axios";

let state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

const CreateUser = () => {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const submit = () => {
    axios
      .post(`http://localhost:4000/v1/api/ticket/create`, {
        id: parseInt(randomString(11, "1442518828")),
        name,
        origin,
        destination,
      })
      .then((data) => {
        console.log(data);
        if (data.data.success) {
          alert(data.data.mssg);
        }

        setName("");
        setOrigin("");
        setDestination("");
      })
      .catch((err) => {
        alert(err.response.data.mssg);
      });
  };

  return (
    <>
      <Header />

      <Container sx={{ mt: 20 }}>
        <Stack spacing={3}>
          <TextField
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          {/* <FormControl>
            <TextField
              label="DOB"
              type="date"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </FormControl> */}

          <FormControl>
            <Select
              value={origin}
              labelId="Select"
              label="Select Origin"
              onChange={(e) => {
                setOrigin(e.target.value);
              }}
            >
              <MenuItem value="">Select Origin</MenuItem>
              {state.map((data) => (
                <MenuItem value={data}>{data}</MenuItem>
              ))}
            </Select>

            <InputLabel id="Select">Select Origin</InputLabel>
          </FormControl>
          <FormControl>
            <Select
              value={destination}
              labelId="Select"
              label="Select Destination"
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            >
              <MenuItem value="">Select Destination</MenuItem>
              {state.map((data) => (
                <MenuItem value={data}>{data}</MenuItem>
              ))}
            </Select>

            <InputLabel id="Select">Select Destination</InputLabel>
          </FormControl>

          <Button onClick={submit} variant="contained">
            Submit
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default CreateUser;
