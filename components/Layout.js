import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="container flex flex-col h-full m-w-7xl mx-auto">
      <div className="flex-1">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
