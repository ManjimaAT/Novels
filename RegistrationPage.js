import React from 'react';
import { Button, TextField, Typography, Container } from '@material-ui/core';

const RegistrationPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Registration</Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegistrationPage;
