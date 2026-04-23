export type RequirementType = "home" | "agriculture" | "industry";

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  requirementType: RequirementType;
  message: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface ProductCard {
  id: string;
  title: string;
  category: RequirementType;
  description: string;
  features: string[];
  image: string;
}

export interface TestimonialData {
  id: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  text: string;
  image?: string;
}

export interface ApplicationData {
  id: string;
  title: string;
  description: string;
  icon: string;
  stats: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: "farm" | "installation" | "crop" | "testimonial";
  caption?: string;
}
