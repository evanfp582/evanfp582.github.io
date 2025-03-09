import React from "react";
import { TextField, Box, Button } from "@mui/material";

const Login = ({ username, setUsername, password, setPassword, onNext }) => {
  return (
    <Box>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={!username || !password}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Login;