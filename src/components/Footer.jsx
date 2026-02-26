
function Footer() {
    return (
      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-left">© {new Date().getFullYear()} Muhammad Mustafa Abubakar</p>
  
          <div className="footer-links">
            <a href="mailto:abubakarmustapham10@gmail.com">Email</a>
            <a href="https://github.com/Mustyab" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;