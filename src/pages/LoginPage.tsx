import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Divider,
  Alert,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Person as PersonIcon,
  LocalPharmacy as PharmacyIcon,
} from "@mui/icons-material";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
      if (error) setError("");
    };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please enter both username and password");
      return;
    }

    console.log("Login attempt:", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F8FAFB 0%, #E2E8F0 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            boxShadow: "0 8px 32px rgba(46, 125, 154, 0.15)",
            borderRadius: "16px",
            overflow: "visible",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  mb: 2,
                }}
              >
                <PharmacyIcon sx={{ fontSize: 40, color: "white" }} />
              </Box>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                OCT PAY UP NIGG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sign in and send GCASH/BPI
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Username or Email"
                variant="outlined"
                value={formData.username}
                onChange={handleChange("username")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={formData.password}
                onChange={handleChange("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePassword}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 4 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  mb: 3,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                Sign In
              </Button>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              <Button
                fullWidth
                variant="outlined"
                size="large"
                sx={{
                  py: 1.5,
                  mb: 2,
                }}
              >
                Forgot Password?
              </Button>
            </Box>

            <Box
              sx={{
                textAlign: "center",
                mt: 4,
                pt: 3,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                Secure pharmacy management system
              </Typography>
              <br />
              <Typography variant="caption" color="text.secondary">
                © 2024 Pharma POS. All rights reserved.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;
