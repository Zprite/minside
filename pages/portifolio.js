import Layout from "../components/MyLayout";
import BlogPostCard from "../components/BlogPostCard";
import matter from 'gray-matter'
import posts from "../content/BlogPosts"

export default function Portifolio() {
  return (
    <Layout>
     <div className="portifolioContainer">

      <style jsx>{`
        .contentDescContainer{
          background:#eee;
          border: 1px solid #eee;
          border-radius:12px;
          margin-bottom:8px;
          display:flex;
          flex-direction:vertical;
          justify-content:center;
          align-items:center;
          max-width:400px;
          padding:24px;
          padding-top:32px;
          margin-top: 24px;
        }
        .cardView{
          margin: 0 5%;
          background:#eee;
          padding-top:0px;
          margin-top:0px;
          border-radius:8px;
        }
          .cardContainer{
            display: flex;
            flex-direction: row;
            justify-content:center;
            flex-wrap: wrap;
            background: #eee;
            padding-top:12px;
            padding-bottom:64px;
            border-radius:8px;
            margin: 0 4%;
          }
          @media screen and (max-width: 800px) {
            .contentDescContainer{
              background:#eee;
              border: 1px solid #eee;
              border-radius:12px;
              margin-bottom:8px;
              display:flex;
              flex-direction:vertical;
              justify-content:center;
              align-items:center;
              max-width:400px;
              padding:24px;
              padding-top:32px;
              margin-top: 50px;
            }
          }
        `}
        </style>
      <div className="cardView">
      <div className="contentDescContainer">
        <h1>Portefølje</h1>
        <p>Her fremhever jeg alle mine større og mindre prosjekter, og skriver bloglignende innlegg om hver av de. 
          Dette inkluderer alt fra beskrivelser, kodeeksempler, 
          bilder og personlige tanker og opplevelser.
        </p>
      </div>
        <div className="cardContainer">
          {GetAllApps()}
        </div>
      </div>
      </div> 
    </Layout>
  );
}
const GetAllApps = () => {
  return(
    <>
      {posts.map(post => <BlogPostCard date={post.date} title={post.title} desc={post.desc} img={post.img}/>)}
    </>
  )
}
