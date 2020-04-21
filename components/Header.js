import Link from 'next/link'

const linkStyle = {
  marginRight: 15
  
};

const Header = () => (
  <div className="headerContainer">
    <style jsx>{`

      h1{
        font-size:1.3em;
        border : 1px solid #fff;
        color:#fff;
        padding:12px;
        margin-left: 32px;
      }
      h1:hover{
        border: 1px solid #fc036f;
        transition: border .2s;
      }
       a{
         text-decoration:none;
         margin-right:32px;
         color: #fff;
         font-size: 1.3em;
       }
       a:hover {
         color: #00ff95;
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
      <Link href="/">
        <a><h1><span>M</span>arcus <span>B</span>irkeland</h1></a>
      </Link>
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