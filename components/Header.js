import Link from 'next/link'

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Hjem</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Kontakt</a>
    </Link>
    <Link href="/apps">
      <a style={linkStyle}>Apper</a>
    </Link>
    <Link href="/portifolio">
      <a style={linkStyle}>Portefølje</a>
    </Link>
  </div>
);

export default Header;