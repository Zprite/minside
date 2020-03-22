import Link from "next/link";
import Layout from "../components/MyLayout";

export default function Index() {
  return (
    <Layout>
      <h1>Marcus B Birkeland</h1>
	  <p>Jeg er en ung student/utvikler.<br/>
		 På denne siden legger jeg ut informasjon om alle mine prosjekter.<br/>
		 Ta gjerne kontakt dersom du er interessert i en IT-partner :)
	  </p>
	  <h2> Fremhevet prosjekt: </h2>
	  <p> <b>Koran funksjon på Discord-bot.</b></p>
	  <p>Finn en tilfeldig ayah fra koranen og bli allahs utvalgte!</p> 
    </Layout>
  );
}
