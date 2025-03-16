import "./FooterSection.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Luis Fernando dos Santos. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
         
        </a>
      </div>
    </footer>
  );
};

export default Footer;