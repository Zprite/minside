import Link from "next/link";
import Layout from "../components/MyLayout";
import BlogPostCard from "../components/BlogPostCard";

export default function Index() {
  return (
    <Layout>
			<div className="mainInfo">
				<h1>Marcus B Birkeland</h1>
				<p>Jeg er en ung student/utvikler.<br/>
				På denne siden legger jeg ut informasjon om alle mine prosjekter.<br/>
				Ta gjerne kontakt dersom du er interessert i en IT-partner :)
				</p>
			</div>
      
			<div className="featuredProject">
				<h2>Fremhevet prosjekt</h2>
			</div>
			<div className="contactContainer">
				<h2>Ta kontakt!</h2>
			</div>
    </Layout>
  );
}
