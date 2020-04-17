import Header from './Header'

const layoutStyle = {
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header className="header"/>
    {props.children}
  </div>
);

export default Layout;