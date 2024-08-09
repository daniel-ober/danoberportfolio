import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-left">{props.children}</div>
      <div className="layout-right">
        <img
          className="dan-ober"
          src="https://i.imgur.com/HTUD8gZ.pngg"
          alt="dan-ober"
        ></img>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
