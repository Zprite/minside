import Link from 'next/link'

const linkStyle = {
  marginRight: 15
  
};

const Header = () => (
  <div className="headerContainer">
    <style jsx>{`

      h1{
        margin: 24px 0px;
        font-size:1.2em;
        border : 1px solid black;
        background: #fff;
      }
       a{
         text-decoration:none;
         margin-right:32px;
         color: #000;
         font-size: 1.2em;
       }
       a:hover {
         color: #36bf8c;
         transition: color .4s; 
       }
      .headerItems{
        display:flex;
        justify-content:space-evenly;
        align-items:center;

      }
      .linkContainer{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        margin-left: 10%;
      }
      @media screen and (max-width: 800px) {
        h1{
        }
        .linkContainer{
          margin-left:0px;
        }
        .headerItems{
          width:100%;
          display:flex;
          justify-content:space-evenly;
          align-items:center;
        }
        a{
          margin-top:8px;
        }
      }
      `}</style>
      <div className="headerItems">
        <h1>Marcus B<br></br>Birkeland</h1>
        <div className="linkContainer">
          <Link href="/">
            <a>Hjem</a>
          </Link>
          <Link href="/portifolio">
            <a>Portefølje</a>
          </Link>
        </div>
    </div>
  </div>
);

export default Header;