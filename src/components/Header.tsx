import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Menu,
  MenuItem,
  Avatar,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RootState } from '../app/store';
import { logout } from '../features/auth/authSlice';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(logout() as any);
    handleCloseUserMenu();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 显示在大屏幕上的标题 */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            高中题库管理系统
          </Typography>

          {/* 移动端菜单 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/subjects'); }}>
                <Typography textAlign="center">学科</Typography>
              </MenuItem>
              <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/questions'); }}>
                <Typography textAlign="center">题库</Typography>
              </MenuItem>
              <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/discussions'); }}>
                <Typography textAlign="center">讨论</Typography>
              </MenuItem>
              {user && (
                <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/mistakes'); }}>
                  <Typography textAlign="center">错题本</Typography>
                </MenuItem>
              )}
              {user && (
                <MenuItem onClick={() => { handleCloseNavMenu(); navigate('/recommendations'); }}>
                  <Typography textAlign="center">推荐</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          {/* 显示在小屏幕上的标题 */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            高中题库
          </Typography>

          {/* 桌面端菜单 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => navigate('/subjects')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              学科
            </Button>
            <Button
              onClick={() => navigate('/questions')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              题库
            </Button>
            <Button
              onClick={() => navigate('/discussions')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              讨论
            </Button>
            {user && (
              <Button
                onClick={() => navigate('/mistakes')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                错题本
              </Button>
            )}
            {user && (
              <Button
                onClick={() => navigate('/recommendations')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                推荐
              </Button>
            )}
          </Box>

          {/* 用户菜单 */}
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    {user.username.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={() => { handleCloseUserMenu(); navigate('/profile'); }}>
                    <Typography textAlign="center">个人中心</Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">退出登录</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex' }}>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/login"
                  startIcon={<AccountCircleIcon />}
                >
                  登录
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/register"
                  sx={{ ml: 1 }}
                >
                  注册
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;