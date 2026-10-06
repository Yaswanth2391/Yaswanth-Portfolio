import { Mail, Phone, MapPin, Send } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../components/BrandIcons";
import PageHeader from "../components/PageHeader";
export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Let's talk about your next product."
        description="Open to MERN full-stack, frontend and web development opportunities. Send a message or connect directly."
      />
      <section className="container contact-grid section-bottom">
        <div className="contact-card">
          <h3>Get in touch</h3>
          <a href="mailto:yaswanthp1156@gmail.com">
            <Mail />
            <span>
              <small>Email</small>
              <b>yaswanthp1156@gmail.com</b>
            </span>
          </a>
          <a href="tel:+916281527242">
            <Phone />
            <span>
              <small>Phone</small>
              <b>+91 6281527242</b>
            </span>
          </a>
          <div>
            <MapPin />
            <span>
              <small>Location</small>
              <b>Kakinada, Andhra Pradesh</b>
            </span>
          </div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <GithubIcon />
            <span>
              <small>GitHub</small>
              <b>Open profile</b>
            </span>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedinIcon />
            <span>
              <small>LinkedIn</small>
              <b>Connect with me</b>
            </span>
          </a>
        </div>
        <form
          className="contact-form"
          action="mailto:yaswanthp1156@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input name="Name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              type="email"
              name="Email"
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="Message"
              required
              rows="7"
              placeholder="Tell me about the opportunity or project..."
            />
          </label>
          <button className="btn primary" type="submit">
            Send Message <Send size={16} />
          </button>
          <p className="form-note">
            This form opens your default email client. A backend contact API can
            be connected later.
          </p>
        </form>
      </section>
    </>
  );
}
