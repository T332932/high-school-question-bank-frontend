import React, { useEffect, ReactNode } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { getUserProfile } from './features/auth/authSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import SubjectsPage from './pages/SubjectsPage';
import SubjectDetailPage from './pages/SubjectDetailPage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionDetailPage from './pages/QuestionDetailPage';
import DiscussionsPage from './pages/DiscussionsPage';
import DiscussionDetailPage from './pages/DiscussionDetailPage';
import RecommendationsPage from './pages/RecommendationsPage';
import MistakesPage from './pages/MistakesPage';
import RevisionPage from './pages/RevisionPage';
import ErrorPage from './pages/ErrorPage';
import './App.css';

interface PrivateRouteProps {
  element: ReactNode;
}

// 私有路由组件
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  return <>{user ? element : <Navigate to="/login" replace />}</>;
};

// 教师/管理员路由组件
const TeacherRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  return <>{user && (user.role === 'teacher' || user.role === 'admin') ? (
    element
  ) : (
    <Navigate to="/" replace />
  )}</>;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(getUserProfile() as any);
    }
  }, [user, dispatch]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="App">
      <Header />
      <Box component="main" sx={{ minHeight: 'calc(100vh - 120px)', py: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/subjects/:id" element={<SubjectDetailPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/questions/:id" element={<QuestionDetailPage />} />
          <Route path="/discussions" element={<DiscussionsPage />} />
          <Route path="/discussions/:id" element={<DiscussionDetailPage />} />
          <Route path="/recommendations" element={<PrivateRoute element={<RecommendationsPage />} />} />
          <Route path="/mistakes" element={<PrivateRoute element={<MistakesPage />} />} />
          <Route path="/mistakes/review" element={<PrivateRoute element={<RevisionPage />} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
};

export default App;