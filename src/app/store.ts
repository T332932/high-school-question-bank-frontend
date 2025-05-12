import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import subjectReducer from '../features/subjects/subjectSlice';
import recommendationsReducer from '../features/recommendations/recommendationsSlice';
import mistakesReducer from '../features/mistakes/mistakesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    subjects: subjectReducer,
    recommendations: recommendationsReducer,
    mistakes: mistakesReducer,
    // 后续会添加更多reducer
  },
});

// 为RootState和AppDispatch定义类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;