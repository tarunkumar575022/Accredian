export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface Domain {
  id: string;
  title: string;
  icon: string;
}

export interface CourseSegment {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  company: string;
  logo: string;
  quote: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  teamSize: string;
  interest: string;
  message?: string;
  createdAt: string;
}
