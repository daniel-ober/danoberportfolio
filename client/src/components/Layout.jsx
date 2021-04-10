import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
