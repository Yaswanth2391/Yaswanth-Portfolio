import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/education", "Education"],
  ["/contact", "Contact"],
];
export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="site-shell">
      <header className="navbar">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span>YP</span>
          <b>YASWANTH PEMMADI</b>
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a className="connect-btn" href="mailto:yaswanthp1156@gmail.com">
            Let's Connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <div>
          <b>YP</b> Yaswanth Pemmadi
        </div>
        <span>Full Stack Developer — MERN</span>
        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <GithubIcon size={17} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedinIcon size={17} />
          </a>
          <a href="mailto:yaswanthp1156@gmail.com">
            <Mail size={17} />
          </a>
        </div>
      </footer>
    </div>
  );
}
