// Icons
import { User, CodeXml, Laptop, GraduationCap } from "lucide-react";

// Constants
import {
  HOME_URL,
  EXPERIENCE_URL,
  PROJECT_LIST_URL,
  EDUCATION_URL,
} from "@/constants/routes";

export const menu = [
  {
    label: "About",
    link: HOME_URL,
    base_link: "",
    icon: User,
  },
  {
    label: "Experience",
    link: EXPERIENCE_URL,
    base_link: "experience",
    icon: CodeXml,
  },
  {
    label: "Project",
    link: PROJECT_LIST_URL,
    base_link: "project",
    icon: Laptop,
  },
  {
    label: "Education",
    link: EDUCATION_URL,
    base_link: "education",
    icon: GraduationCap,
  },
];
