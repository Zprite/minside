import Link from 'next/link'

const linkStyle = {
  marginRight: 15
  
};

const Header = () => (
  <div className="headerContainer">
    <style jsx>{`
      .headerContainer{
        border-bottom : 1px solid #333;
      }
      h1{
        margin-right:64px;
        font-size:1.75em;
      }
       a{
         text-decoration:none;
         margin-right:32px;
         color: #000;
         font-size: 1.5em;
       }
       a:hover {
         color: #36bf8c;
         transition: color .4s; 
       }
      .linkContainer{
        display:flex;
        justify-content:center;
        align-items:center;
      }
      `}</style>
      <div className="linkContainer">
        <h1>Marcus B<br></br>Birkeland</h1>
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