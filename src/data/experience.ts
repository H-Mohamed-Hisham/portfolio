// Images
import { software_cubes, ampcome } from "@/assets/images";

const experience = [
  {
    id: 1,
    organisation: "Ampcome",
    designation: {
      role: "React Developer",
      period: "October 2021 - Present",
    },
    location: "Bangalore, Karnataka",
    icon: ampcome,
    responsibilities: [
      `Designing and developing web applications using React.js, Next.js, Redux, TypeScript, JavaScript, CSS, and HTML adhering to best practices and industry standards to ensure high-quality and efficient codebase.`,
      `Proactively identifying and resolving bugs in the application codebase, ensuring smooth and uninterrupted user experience.`,
      `Implementing performance optimization techniques to enhance application speed and responsiveness, ensuring optimal performance across various devices and platforms.`,
      `Ensured secure authentication using modern tools like Okta, Google Auth for safeguarding application access.`,
      `Integrated Stripe and Razorpay payment gateways, enabling secure and seamless transaction processing.`,
    ],
  },
  {
    id: 2,
    organisation: "Software Cubes",
    designation: {
      role: "Junior .Net Developer",
      period: "January 2018 - May 2018",
    },

    location: "Chennai, Tamil Nadu",
    icon: software_cubes,
    responsibilities: [
      `Developed web applications using C#, ASP.NET, HTML, CSS and JavaScript gaining hands-on experience.`,
      `Used SQL queries for efficient data retrieval.`,
    ],
  },
];

export { experience };
