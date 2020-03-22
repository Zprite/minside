import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import promo from '../../res/terminus_promo.jpg'


const content = {
  terminus : {
    title: "terminus",
    body: "JEG ELSKER FORTNITE",
    images: promo
  }
}

export default function Post() {
  const router = useRouter();
  const pageContent = content[router.query.id];

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}
