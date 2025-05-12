import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import ForumIcon from '@mui/icons-material/Forum';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: '学科管理',
      description: '提供高中阶段各学科的知识点体系，帮助学生系统地掌握知识。',
      icon: <SchoolIcon fontSize="large" color="primary" />,
      path: '/subjects'
    },
    {
      title: '题库练习',
      description: '海量高质量题目，按照学科、章节、难度分类，满足不同层次的学习需求。',
      icon: <QuizIcon fontSize="large" color="primary" />,
      path: '/questions'
    },
    {
      title: '错题收集',
      description: '自动记录错误的题目，形成个人错题本，便于集中复习和巩固。',
      icon: <BookmarksIcon fontSize="large" color="primary" />,
      path: '/mistakes'
    },
    {
      title: '学习分析',
      description: '通过数据分析，了解自己的学习情况，找出薄弱点，有针对性地提高。',
      icon: <AutoGraphIcon fontSize="large" color="primary" />,
      path: '/profile'
    },
    {
      title: '讨论交流',
      description: '与其他学生和教师讨论问题，分享解题思路，共同进步。',
      icon: <ForumIcon fontSize="large" color="primary" />,
      path: '/discussions'
    }
  ];

  return (
    <Box>
      {/* 头部横幅 */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        py: 8,
        backgroundImage: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            高中题库管理系统
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom mb={4}>
            系统化学习，高效备考，提高成绩
          </Typography>
          <Box display="flex" gap={2}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              onClick={() => navigate('/register')}
            >
              免费注册
            </Button>
            <Button 
              variant="outlined" 
              sx={{ color: 'white', borderColor: 'white' }}
              size="large"
              onClick={() => navigate('/subjects')}
            >
              浏览学科
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 特色功能 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" mb={6}>
          我们的特色功能
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}>
                <Box sx={{ 
                  p: 2, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: '80px'
                }}>
                  {feature.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" textAlign="center">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button 
                    fullWidth 
                    variant="outlined" 
                    onClick={() => navigate(feature.path)}
                  >
                    立即体验
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 教师学生区域 */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    学生使用
                  </Typography>
                  <Typography variant="body1" paragraph>
                    系统提供丰富的高中题目，按照章节和难度分类，帮助你针对性练习。
                    错题会自动收集，形成个人错题本。系统还能智能推荐适合你的题目。
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => navigate('/register')}
                  >
                    学生注册
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    教师使用
                  </Typography>
                  <Typography variant="body1" paragraph>
                    教师可以管理题库资源，添加和编辑题目，查看学生学习数据，
                    了解学生的薄弱点，为教学提供数据支持。
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => navigate('/register')}
                  >
                    教师注册
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;