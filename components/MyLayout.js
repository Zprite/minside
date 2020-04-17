import Header from './Header'

const layoutStyle = {

};

const Layout = props => (
  <div style={layoutStyle}>
    <Header className="header"/>
    {props.children}
  </div>
);

export default Layout;