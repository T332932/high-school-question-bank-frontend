import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" color="primary" sx={{ fontSize: { xs: '6rem', md: '10rem' } }}>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          页面未找到
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          抱歉，您请求的页面不存在或已被移除。
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          返回首页
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;