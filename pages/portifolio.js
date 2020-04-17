import Layout from "../components/MyLayout";
import BlogPostCard from "../components/BlogPostCard";
import matter from 'gray-matter'
import posts from "../content/BlogPosts"

export default function Portifolio() {
  return (
    <Layout>
      <div className="contentDescContainer">
        <h1>Portefølje</h1>
        <p>Her fremhever jeg alle mine større og mindre prosjekter, og skriver bloglignende innlegg om hver av de. 
          Dette inkluderer alt fra beskrivelser, kodeeksempler, 
          bilder og personlige tanker og opplevelser.
        </p>
      </div>
      <style jsx>{`

        .contentDescContainer{
          background:#eee;
          padding:20px;
          border: 1px solid #aaa;
          border-radius:12px;
        }
        .cardView{
          margin: 0 auto;

        }
          .cardContainer{
            display: flex;
            flex-direction: row;
            justify-content:center;
            flex-wrap: wrap;
            background: #eee;
            padding-top:48px;
            padding-bottom:64px;
            border-radius:8px;
            margin: 0 20%;
          }
          @media screen and (max-width: 800px) {
            .contentDescContainer{
              margin-left: 16px;
              margin-right: 16px;
            }
            .cardContainer{
              margin: 0 16px;
            }
          }
        `}
        </style>
      <div className="cardView">
        <div className="cardContainer">
          {GetAllApps()}
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
