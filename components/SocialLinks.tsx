import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg d-flex flex-wrap">

      {/* EMAIL */}
      {socialLinks.email && (
        <Button
          className="btn-icon-only rounded-circle ml-1 social-btn"
          style={{ backgroundColor: "#ffffff", border: "none" }}
          href={socialLinks.email}
          rel="noopener"
          aria-label="Email"
        >
          <i className="bi bi-envelope-fill" style={{ color: "#000", fontSize: "18px" }}></i>
        </Button>
      )}

      {/* LINKEDIN */}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1 social-btn"
          style={{ backgroundColor: "#0A66C2", border: "none" }}
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin" style={{ color: "#fff", fontSize: "18px" }}></i>
        </Button>
      )}

      {/* GITHUB */}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1 social-btn"
          style={{ backgroundColor: "#24292e", border: "none" }}
          href={socialLinks.github}
          target="_blank"
          rel="noopener"
          aria-label="Github"
        >
          <i className="bi bi-github" style={{ color: "#fff", fontSize: "18px" }}></i>
        </Button>
      )}

      {/* INSTAGRAM */}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1 social-btn"
          style={{
            background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            border: "none",
          }}
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <i className="bi bi-instagram" style={{ color: "#fff", fontSize: "18px" }}></i>
        </Button>
      )}

      {/* FACEBOOK */}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1 social-btn"
          style={{ backgroundColor: "#1877F2", border: "none" }}
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <i className="bi bi-facebook" style={{ color: "#fff", fontSize: "18px" }}></i>
        </Button>
      )}

      {/* TWITTER X */}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle ml-1 social-btn"
          style={{ backgroundColor: "#000000", border: "none" }}
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <i className="bi bi-twitter-x" style={{ color: "#ffffff", fontSize: "18px" }}></i>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
