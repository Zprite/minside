import Link from 'next/link'

const linkStyle = {
  marginRight: 15
  
};

const Header = () => (
  <div className="headerContainer">
    <style jsx>{`
      .headerContainer{
        border-bottom : 1px solid #333;
        display:flex;
        justify-content:center;
        
      }
       a{
         text-decoration:none;
         margin-right:32px;
         padding-bottom: 8px;
         color: #000;
         font-size: 1.5em;
       }
       a:hover {
         color: #36bf8c;
         transition: color .4s; 
       }
      .linkContainer{
        display: inline-flex;
      }
      `}</style>
      <div className="linkContainer">
        <h1>Marcus B Birkeland</h1>
        <Link href="/">
          <a>Hjem</a>
        </Link>
        <Link href="/contact">
          <a>Kontakt</a>
        </Link>
        <Link href="/apps">
          <a>Apper</a>
        </Link>
        <Link href="/portifolio">
          <a>Portefølje</a>
        </Link>
    </div>
  </div>
);

export default Header;