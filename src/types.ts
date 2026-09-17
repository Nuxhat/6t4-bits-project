export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  iconName: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  layer: 'design' | 'frontend' | 'mobile' | 'api' | 'data' | 'cloud' | 'edge' | 'compute' | 'event' | 'observability';
  icon: string;
  status: 'active' | 'syncing' | 'healthy';
}

export interface ArchitectureBlueprint {
  id: string;
  name: string;
  industry: string;
  summary: string;
  p99Latency: string;
  throughput: string;
  slaUptime: string;
  costEfficiency: string;
  nodes: ArchitectureNode[];
  highlights: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientIndustry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
    direction?: 'up' | 'down';
  }[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface TechItem {
  name: string;
  category: 'UI/UX & Design' | 'Web Development' | 'Mobile Apps' | 'Backend & APIs' | 'Cloud & Databases' | 'DevOps & Tooling' | string;
  level: 'Core Enterprise' | 'High Performance' | 'Cloud Native' | 'Design Standard';
  description: string;
}

export interface ScopeOptions {
  projectType: 'web_dev' | 'mobile_dev' | 'fullstack' | 'uiux_design';
  scaleTier: 'startup' | 'scaleup' | 'enterprise' | 'hyperscale';
  cloudProvider: 'aws' | 'gcp' | 'azure' | 'multi_cloud';
  compliance: string[];
  timeline: 'urgent' | 'standard' | 'flexible';
}
