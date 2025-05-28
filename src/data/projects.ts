import { ProjectType } from '../types';

export const projects: ProjectType[] = [
  {
    id: '1',
    title: 'FinConnect Payment Gateway',
    description: 'A secure, scalable payment gateway for African businesses, processing over 10,000 transactions daily.',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    category: 'Fintech',
  },
  {
    id: '2',
    title: 'MediTrack Health Platform',
    description: 'Electronic health records and telemedicine platform serving 15+ clinics across East Africa.',
    image: 'https://images.pexels.com/photos/3912366/pexels-photo-3912366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Firebase', 'Express', 'MongoDB'],
    category: 'Healthcare',
  },
  {
    id: '3',
    title: 'AgriMarket Supply Chain',
    description: 'Farm-to-market platform connecting 5,000+ farmers to distributors with real-time inventory tracking.',
    image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Django', 'MySQL', 'Docker'],
    category: 'AgriTech',
  },
  {
    id: '4',
    title: 'EduLearn LMS Platform',
    description: 'Learning management system for schools with 50,000+ active students and integrated assessment tools.',
    image: 'https://images.pexels.com/photos/8471984/pexels-photo-8471984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Azure'],
    category: 'EdTech',
  },
];