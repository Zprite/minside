import Layout from '../components/MyLayout'

const ExternalLink = props => (
  <li>
      <a href={props.href}>{props.text}</a>
  </li>
);

export default function Contact() {
  return (
    <Layout>
      <h1>Kontakt</h1>
      <p>Her kan du få tak i meg:</p>
      <ul>
        <ExternalLink href="https://Facebook.com" text="facebonk"/>
        <ExternalLink href="https://Twitter.com" text="Twinter"/>
        <ExternalLink href="https://LinkedIn.com" text="Limkedin"/>
      </ul>
    </Layout>
  );
}
