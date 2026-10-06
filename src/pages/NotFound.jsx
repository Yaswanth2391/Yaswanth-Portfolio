import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="Page not found."
        description="The page you requested does not exist."
      />
      <div className="container section-bottom">
        <Link className="btn primary" to="/">
          Return Home
        </Link>
      </div>
    </>
  );
}
