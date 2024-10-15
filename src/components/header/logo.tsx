import { Link } from "react-router-dom";

// Data
import { header } from "@/data/layout";

export function Logo() {
  const { title } = header;

  return (
    <Link to="/" className="font-bold text-lg">
      {title}
    </Link>
  );
}
