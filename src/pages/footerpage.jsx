import { Link } from "react-router-dom";
function FooterPage() {
  return (
    <section className="pagefooter-section">
      <div className="footercontainer">
        <div className="description">
          <div className="footerlogo">
            <h2 style={{ color: "#fff", paddingTop: 20 }}>SADGYM</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, labore iusto commodi eaque eveniet magni? Temporibus
              voluptate laudantium cum deserunt?
            </p>
          </div>
          <div className="openingtime">
            <h2>
              <span>Opening Time</span>
            </h2>
            <p>Monday-Friday:6AM - 9PM</p>
            <p>Sunday-Saturday:9AM-7PM</p>
          </div>
        </div>
        <div className="socialicons">
          <div>
            <h1>Useful Links</h1>
          </div>
          <div className="links">
            <ul className="links">
              <Link to={"/aboutme"}>
                <li>
                  <a href="">About us</a>
                </li>
              </Link>
              <Link to={"/aboutme"}>
                <li>
                  <a href="">Membership</a>
                </li>
              </Link>
              <Link to={"/product"}>
                <li>
                  <a href="">Shop</a>
                </li>
              </Link>
              <Link to={"/contact"}>
                <li>
                  <a href="">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-contactinfo">
          <h1>
            <span>Contact Info</span>
          </h1>
          <p>
            <span>Address</span>
          </p>
          <p> Kathmandu,Nepal</p>
          <p>
            <span>Phone</span>
          </p>
          <p>9800000000</p>
          <p>9869000000</p>
          <p>
            <span>Email</span>
          </p>
          <p>test@gmail.com</p>
          <p>www.exapmple.com</p>
        </div>
        <div className="info-type">
          <h1>Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            temporibus?
          </p>
        </div>
      </div>
      <div className="copygright">Copyright &copy; - SAD PROJECT 2024</div>
    </section>
  );
}
export default FooterPage;
