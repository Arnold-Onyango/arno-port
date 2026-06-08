export type ProjectTag = string

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  goalLine: string
  tags: ProjectTag[]
  gradientFrom: string
  gradientTo: string
  accentColor: string
  bgLight: string
}

export const projects: Project[] = [
  {
    id: 'soko',
    title: 'Soko',
    subtitle: 'Modern African e-commerce platform',
    category: 'Ecommerce',
    description:
      'A full-scale e-commerce experience designed for African markets — celebrating local aesthetics while delivering world-class usability. From product discovery to checkout, every flow was crafted to reduce friction and increase buyer confidence. Warm terracotta tones echo the richness of the markets it serves.',
    goalLine: 'Designed to reduce checkout friction and lift conversion.',
    tags: ['UX Research', 'Figma', 'Webflow'],
    gradientFrom: '#C4714A',
    gradientTo: '#7A3B1E',
    accentColor: '#C4714A',
    bgLight: '#FDF0EA',
  },
  {
    id: 'numi',
    title: 'Numi',
    subtitle: 'Diaspora remittance & personal finance app',
    category: 'Finance',
    description:
      'Sending money home should feel safe, fast, and simple. Numi was designed around the emotional journey of the diaspora — people who carry financial responsibility for families across borders. Trust was the primary design principle, expressed through deep navy tones, clear hierarchy, and zero-surprise flows.',
    goalLine: 'Built around trust, clarity, and one-tap sending.',
    tags: ['Mobile UI', 'React Native', 'Figma'],
    gradientFrom: '#1B3A6B',
    gradientTo: '#0A1E40',
    accentColor: '#3B82F6',
    bgLight: '#EEF3FB',
  },
  {
    id: 'stiv-ops',
    title: 'Stiv Ops',
    subtitle: 'SME stakeholder management platform',
    category: 'SaaS Dashboard',
    description:
      'Running a small business means juggling a dozen stakeholders at once. Stiv Ops was designed to bring calm to that complexity — a dashboard that feels approachable even when the underlying data is dense and critical. A comprehensive design system ensures every state, from empty to overloaded, is handled with grace.',
    goalLine: 'Designed to make complex operations feel calm and legible.',
    tags: ['Dashboard Design', 'Design Systems', 'React'],
    gradientFrom: '#065F46',
    gradientTo: '#022C22',
    accentColor: '#10B981',
    bgLight: '#ECFDF5',
  },
  {
    id: 'hali',
    title: 'Hali',
    subtitle: 'Mental wellness check-in app',
    category: 'Wellness',
    description:
      'Hali (meaning "state" in Swahili) is a gentle daily check-in app built around accessibility and emotional safety. No streaks, no guilt — just a calm, private space to track how you\'re feeling and why. Every micro-interaction was considered for users who may be in a vulnerable emotional state.',
    goalLine: 'Designed for gentle daily habits and accessible-first interaction.',
    tags: ['Mobile UI', 'Accessibility', 'Figma'],
    gradientFrom: '#4A7C59',
    gradientTo: '#1E3D2A',
    accentColor: '#6BAE7F',
    bgLight: '#F0F7F2',
  },
]
