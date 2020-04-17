import Layout from "../components/MyLayout";
import BlogPostCard from "../components/BlogPostCard";
import matter from 'gray-matter'
import posts from "../content/BlogPosts"

export default function Apps() {
  return (
    <Layout>
      <h1>asd</h1>
      <style jsx>{`
        .cardView{
          margin: 0 auto;
        }
          .cardContainer{
            display: flex;
            flex-direction: row;
            justify-content:center;
            flex-wrap: wrap;
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
