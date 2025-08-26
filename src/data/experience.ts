// Images
import {
  software_cubes,
  // clover_design_group,
  ampcome,
} from '@/assets/images';

const experience = [
  {
    id: 1,
    organisation: 'Ampcome',
    designation: {
      role: 'Software Developer',
      period: 'October 2021 - Present',
    },

    location: 'Bangalore, Karnataka, India',
    icon: ampcome,
    description:
      'Developing scalable web applications using React.js, Next.js, Redux, TypeScript, and modern UI technologies while adhering to best practices. Proactively handled bug fixes, performance optimization, and responsive design. Integrated secure authentication using Okta and Google Auth, and implemented Stripe and Razorpay payment gateways for smooth transaction processing.',
  },
  // {
  //   id: 2,
  //   organisation: "Clover Design Group",
  //   designation: {
  //     role: "PHP Developer",
  //     period: "December 2019 - August 2021",
  //   },

  //   location: "Trichy, Tamil Nadu, India",
  //   icon: clover_design_group,
  // },
  {
    id: 2,
    organisation: 'Software Cubes',
    designation: {
      role: 'Programmer (Junior .Net Developer) ',
      period: 'January 2018 - May 2018',
    },

    location: 'Chennai, Tamil Nadu, India',
    icon: software_cubes,
    description:
      'Developed web applications using C#, ASP.NET, HTML, CSS and JavaScript gaining hands-on experience. Used SQL queries for efficient data retrieval.',
  },
];

export { experience };
