// Images
import {
  h_property_home,
  h_property_home_2,
  h_property_property,
  h_property_property_2,
  h_property_saved_property,
  h_property_profile,
  h_shop_home,
  h_shop_product,
  h_shop_cart,
  h_shop_checkout_adress,
  h_shop_checkout_payment_method,
  h_shop_checkout_place_order,
  h_shop_stripe_payment,
  h_shop_my_order,
  h_shop_my_orders,
  h_shop_change_password,
  h_shop_admin_dashboard,
  h_shop_admin_product_list,
  h_shop_admin_order_list,
  sony_desktop,
  sony_desktop_2,
  sony_desktop_3,
  sony_mobile,
  h_stock_portfolio_dashboard,
  h_stock_portfolio_transactions,
  h_stock_portfolio_create_transaction,
  spechtral_home,
} from "@/assets/images";

const project = [
  {
    id: "1",
    name: "Stock Portfolio",
    description: `Stock portfolio is a hobby project that allows users to manually enter their stock transaction details, such as buying or selling shares. It provides a comprehensive overview of the user's invested amount, returns, and profit/loss calculations. Users can also view the total performance of all stocks they have bought or sold. The project includes visual charts for better insights and a clear representation of their portfolio's financial data, making it easier to track and analyze investments.`,
    associated: "Hobby Project",
    projectDomain: "React",
    projectDomainKey: "react",
    sourceCode: "https://github.com/H-Mohamed-Hisham/stock-portfolio",
    livePreview: "https://h-stock-portfolio.onrender.com/",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "Nest JS",
      "PostgreSQL",
      "Prisma",
    ],
    screenshots: [
      h_stock_portfolio_dashboard,
      h_stock_portfolio_transactions,
      h_stock_portfolio_create_transaction,
    ],
  },
  {
    id: "2",
    name: "Spechtral",
    description: `Spechtral is an AI-driven platform designed to simplify tax research by providing users with dynamic answers to tax-related queries. Users can search for specific tax topics, such as the taxability of products or services across various states, and receive instant, relevant information. The platform enhances the research experience by offering an intuitive interface, allowing professionals to quickly access and understand complex tax regulations efficiently.`,
    associated: "Ampcome",
    projectDomain: "Next JS",
    projectDomainKey: "nextjs",
    sourceCode: null,
    livePreview: "https://taxai-dev.netlify.app/",
    stack: ["React", "TypeScript", "Tailwind CSS", "ShadCN", "Redux"],
    screenshots: [spechtral_home],
  },
  {
    id: "3",
    name: "H Property",
    description: `This hobby project is a real estate platform that allows users to browse properties available for buying or renting. It features messaging functionality for users to directly contact property owners and securely handles authentication using Google OAuth. Admins can manage property listings by adding, editing, or deleting them and monitor user interactions and property views via a dashboard. Additionally, users can save their favorite listings and update their profile details.`,
    associated: "Udemy Certification",
    projectDomain: "Next JS",
    projectDomainKey: "nextjs",
    sourceCode: "https://github.com/H-Mohamed-Hisham/h-property",
    livePreview: "https://h-property.vercel.app/",
    stack: [
      "Next JS",
      "React",
      "Google OAuth",
      "JavaScript",
      "JavaScript",
      "MongoDB",
      "Tailwind CSS",
      "Vercel",
    ],
    screenshots: [
      h_property_home,
      h_property_home_2,
      h_property_property,
      h_property_property_2,
      h_property_saved_property,
      h_property_profile,
    ],
  },
  {
    id: "4",
    name: "H Shop",
    description: `Online shopping application which allows consumers to directly buy goods. Payments are integrated with one of the popular payment gateway STRIPE. Admins can add, edit or delete the product & monitor the orders from customers & monitor overall stats of sales in dashboard charts. Customers can monitor their order status & edit their profile details. App is deployed in render.com`,
    associated: "Udemy Certification",
    projectDomain: "React",
    projectDomainKey: "react",
    sourceCode: "https://github.com/H-Mohamed-Hisham/h-shop-client",
    livePreview: "https://h-shop.onrender.com",
    stack: [
      "React",
      "Redux",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "Express JS",
      "Stripe",
      "Bootstrap",
      "SASS",
      "Render",
    ],
    screenshots: [
      h_shop_home,
      h_shop_product,
      h_shop_cart,
      h_shop_checkout_adress,
      h_shop_checkout_payment_method,
      h_shop_checkout_place_order,
      h_shop_stripe_payment,
      h_shop_my_order,
      h_shop_my_orders,
      h_shop_change_password,
      h_shop_admin_dashboard,
      h_shop_admin_product_list,
      h_shop_admin_order_list,
    ],
  },
  {
    id: "5",
    name: "Sony Cloud Analytics",
    description:
      "Users authenticate through Okta for secure login. They can activate services such as GitLab, AWS, or Azure by filling out relevant forms. The application also provides users with detailed insights into their service usage, including available storage space and CPU usage.",
    associated: "Ampcome",
    projectDomain: "React",
    projectDomainKey: "react",
    sourceCode: null,
    livePreview: null,
    stack: ["React", "Redux", "JavaScript", "Bootstrap", "SASS"],
    screenshots: [sony_desktop, sony_desktop_2, sony_desktop_3, sony_mobile],
  },
];

export { project };
