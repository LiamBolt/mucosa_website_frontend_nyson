import TechImageEvent from '../assets/images/berlin-tech-event.webp';
import CommunityTechEvent from '../assets/images/dutch-tech-event.png';
import BusinessTechEvent from '../assets/images/kenya-tech.jpg';
import EntTechEvent from '../assets/images/google-event.webp';
import EducationEvent from '../assets/images/tech-event-sa.jpeg';
import CareerEvent from '../assets/images/barclena-tech-event.jpg';
import MaleDevImage from '../assets/images/male-dev.jpg';
import MaleDevSeniorImage from '../assets/images/dev-male.jpg';
import FemaleDevImage from '../assets/images/female-dev.jpg';

export const newsItems = [
  {
    id: 1,
    image: TechImageEvent,
    category: 'Technology',
    title: 'Annual Tech Summit Highlights Innovation in AI',
    excerpt: 'The recent MUCOSA Tech Summit brought together industry leaders...',
    date: 'March 15, 2024',
    author: { name: 'John Doe', avatar: MaleDevSeniorImage }
  },
  {
    id: 2,
    image: CommunityTechEvent,
    category: 'Community',
    title: 'MUCOSA Launches New Mentorship Program',
    excerpt: 'A new initiative connecting students with industry professionals...',
    date: 'March 12, 2024',
    author: { name: 'Jane Smith', avatar: FemaleDevImage }
  },
  {
    id: 3,
    image: BusinessTechEvent,
    category: 'Business',
    title: 'Local Startup Secures Funding for Music Tech Innovation',
    excerpt: 'A promising music-tech startup has secured funding...',
    date: 'March 10, 2024',
    author: { name: 'Mike Johnson', avatar: MaleDevSeniorImage }
  },
  {
    id: 4,
    image: EntTechEvent,
    category: 'Entertainment',
    title: 'MUCOSA Hosts Concert Night to Celebrate Creativity',
    excerpt: 'A night filled with music, dance, and celebration...',
    date: 'March 8, 2024',
    author: { name: 'Sarah Lee', avatar: FemaleDevImage }
  },
  {
    id: 5,
    image: EducationEvent,
    category: 'Education',
    title: 'Students Shine in Coding Hackathon Challenge',
    excerpt: 'Young developers demonstrated their skills in a coding challenge...',
    date: 'March 5, 2024',
    author: { name: 'David Kim', avatar: MaleDevImage }
  },
  {
    id: 6,
    image: CareerEvent,
    category: 'Career',
    title: 'Tech Career Fair Connects Students with Top Employers',
    excerpt: 'MUCOSA’s annual career fair provided students with opportunities...',
    date: 'March 2, 2024',
    author: { name: 'Emily Brown', avatar: FemaleDevImage }
  }
];
