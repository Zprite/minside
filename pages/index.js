import Link from "next/link";
import Layout from "../components/MyLayout";
import BlogPostCard from "../components/BlogPostCard";
import ContactCard from "../components/ContactCard";

export default function Index() {
  return (

    <Layout>
			<style jsx>{`
			div{
				background: #eee;
				border-radius:4px;
				padding: 20px;
				margin: 20px;
			}
			.mainInfo{
				display:flex;
				flex-direction:row;
				justify-content: center;
				flex-wrap: wrap;
			}
			.basicInfoContainer{
				max-width:500px;
			}
			.profileContainer{
				display:flex;
				flex-direction:row;
				justify-content:center;
				align-items:center;
			}
			.profilePic{
				min-height:100px;
				min-width: 100px;
				margin-right: 32px;
				border-radius: 50%;
			}
			.contactContainer{
				display: flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
			}
			.featuredProject{
				width:100%;
			}
		`}
		</style>
			<div className="mainInfo">
					<div className="basicInfoContainer">
						<div className="profileContainer">
							<img className="profilePic" src="https://scontent.fosl3-2.fna.fbcdn.net/v/t31.0-8/p960x960/13243767_1722770394655392_2128908422727414325_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=QL0h-nhzDZcAX-3ITKt&_nc_ht=scontent.fosl3-2.fna&_nc_tp=6&oh=9f2731887bfb20d1a1a33eb751860a57&oe=5EC1284D"/>
							<h1>Marcus Benjamin Ravnå Birkeland</h1>
						</div>
					<h2>Om meg</h2>
					<p>Jeg er en ung student/utvikler.<br/>
					På denne siden legger jeg ut informasjon om alle mine prosjekter.<br/>
					Jeg er veldig interessert i programmering og har kodet helt siden jeg gikk i syvende klasse på barneskolen. <br/>
					Jeg startet med å lage en enkel kalkulator i java, og siden det har jeg utfordret meg selv i programmering. <br/>
					På videregående skole har jeg gått et studieforberedende elektroløp, og dette inkluderer fag som automatisering, dataelektronikk og elektronisk infrastruktur. <br/>
					Siden vg1 har jeg jobbet i frukt og grønt avdelingen på MENY Trekanten, og jobbet med mange kodeprosjekter ved siden av, både på eget initiativ, og i forhold til skolen. 
					</p>
				</div>
				<div className="contactContainer">
					<h2>Ta kontakt!</h2>
					<div>
						<ContactCard text="Marcus Benjamin Ravnå Birkeland" 
						href="https://www.facebook.com/profile.php?id=100007673447139"
						src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"/>
						<ContactCard text="Marcus Benjamin Ravnå Birkeland"
						 href="https://www.linkedin.com/in/marcus-benjamin-ravn%C3%A5-birkeland-7129161a6/"
						 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png"/>
						<ContactCard text="+47 93041777" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Phone_Shiny_Icon.svg/1024px-Phone_Shiny_Icon.svg.png"/>
						<ContactCard text="birkelandmarcus@gmail.com" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"/>
					</div>
				</div>
				<div className="featuredProject">
					<h2>Fremhevet prosjekt</h2>
				</div>
			</div>
      

    </Layout>
  );
}
