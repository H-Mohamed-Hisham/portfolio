import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Constants
import {
  HOME_URL,
  EXPERIENCE_URL,
  PROJECT_LIST_URL,
  PROJECT_DETAIL_URL,
  EDUCATION_URL,
} from "@/constants/routes";

// Pages
import {
  HomePage,
  ExperiencePage,
  ProjectListPage,
  ProjectDetailPage,
  EducationPage,
} from "@/pages";

const ROUTES = [
  {
    path: HOME_URL,
    element: <HomePage />,
  },
  {
    path: EXPERIENCE_URL,
    element: <ExperiencePage />,
  },
  {
    path: PROJECT_LIST_URL,
    element: <ProjectListPage />,
  },
  {
    path: PROJECT_DETAIL_URL,
    element: <ProjectDetailPage />,
  },
  {
    path: EDUCATION_URL,
    element: <EducationPage />,
  },
];

export function AppRoutes() {
  return (
    <Router basename={"/portfolio"}>
      <Routes>
        {/* 404 Page */}
        {/* <Route path="*" element={<PageNotFound />} /> */}

        {ROUTES.map((route, i) => (
          <Route path={route.path} element={route.element} key={`route-${i}`} />
        ))}
      </Routes>
    </Router>
  );
}
