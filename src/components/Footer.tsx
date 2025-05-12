import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          高中题库管理系统 - 学习、练习、成长
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          {'Copyright © '}
          <Link color="inherit" href="/">
            高中题库管理系统
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;