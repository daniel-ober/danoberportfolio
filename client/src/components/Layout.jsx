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
          src="https://i.imgur.com/9GEemkf.png"
          alt="dan-ober"
        ></img>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
