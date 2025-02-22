import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import CareerPage from './pages/CareerPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ErrorPage from '../src/components/common/Error';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/news/:newsTitle" element={<NewsDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;