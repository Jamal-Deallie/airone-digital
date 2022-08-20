import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import {
  HomePage,
  TeamPage,
  ContactPage,
  AboutPage,
  NotFoundPage,
  WorkPage,
} from './Pages';
import { MainLayout } from './Layouts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='work' element={<WorkPage />} />
            <Route path='teams' element={<TeamPage />} />
            <Route path='contact' element={<ContactPage />} />
            {/* 404 route */}
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
