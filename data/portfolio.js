// Edit this file to update all of the content shown on the portfolio.

export const profile = {
  name: 'Nikhil Lawand',
  title: 'IT Student | Aspiring Frontend Developer',
  headline: 'IT Student & Aspiring Frontend Developer',
  intro:
    "I'm a second-year B.Tech Information Technology student building my skills in frontend development, programming, and database management. I enjoy turning ideas into practical, user-friendly digital experiences and learning through hands-on projects.",
  heroTech: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Python'],
}

export const about = {
  text: "I'm currently pursuing my B.Tech in Information Technology and developing a strong foundation in web technologies, programming, and database management. I enjoy exploring how websites are designed and built, solving problems, and applying what I learn through practical projects. My goal is to keep improving my technical skills and contribute to meaningful software projects.",
  highlights: [
    { title: 'Information Technology student', icon: 'graduation' },
    { title: 'Learning through practical projects', icon: 'hammer' },
    { title: 'Interested in frontend development and software engineering', icon: 'code' },
  ],
}

// Add a new group or skill here as you learn new technologies.
export const skillGroups = [
  { category: 'Frontend Development', icon: 'layout', skills: ['HTML', 'CSS', 'JavaScript'] },
  { category: 'Programming Languages', icon: 'terminal', skills: ['C', 'C++', 'Java', 'Python'] },
  { category: 'Database Technologies', icon: 'database', skills: ['DBMS', 'SQL'] },
]

// githubUrl: when empty, the card falls back to your GitHub profile instead of guessing a repo.
// liveUrl: the "Live Demo" button only appears once this has a real deployed URL.
export const projects = [
  {
    title: 'Travel Packer',
    description:
      'Travel Packer is a personal project focused on making travel preparation more organized. Explore the project to learn more about its features and implementation.',
    tags: [], // e.g. ['HTML', 'CSS', 'JavaScript']
    githubUrl: 'https://github.com/Nikhil8623/Travel_list',
    githubProfileUrl: 'https://github.com/Nikhil8623',
    liveUrl: '', // e.g. 'https://your-deployed-site.vercel.app'
    thumbnail: 'travel',
  },
]

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  branch: 'Information Technology',
  currentYear: 'Second Year',
  college: 'Datta Meghe College Of Engineering',
  graduationYear: '2029',
  // status: 'done' | 'current' | 'upcoming'
  timeline: [
    { label: 'First Year', status: 'done' },
    { label: 'Second Year', status: 'current' },
    { label: 'Third Year', status: 'upcoming' },
    { label: 'Final Year', status: 'upcoming' },
  ],
}

export const contact = {
  email: 'nikhillawand2311@gmail.com',
  phoneDisplay: '+91 8779465186',
  phoneHref: 'tel:+918779465186',
  linkedin: 'https://www.linkedin.com/in/nikhil-lawand-067756358/',
  github: 'https://github.com/Nikhil8623',
  githubUsername: 'Nikhil8623',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
