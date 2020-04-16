import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header className="header"/>
    {props.children}
  </div>
);

export default Layout;