import { Box, Typography, Container } from "@mui/material";
import Dashboard from "@components/Dashboard";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Home Page
        </Typography>
        <Dashboard />
      </Box>
    </Container>
  );
};

export default HomePage;
