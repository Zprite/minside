import Link from "next/link";
import Layout from "../components/MyLayout";

const PostLink = props => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Index() {
  return (
    <Layout>
      <h1>Portifolio</h1>
      <ul>
        <PostLink id="RGB_cube" title="RGB kube" />
        <PostLink id="terminus" title="terminus" />
      </ul>
    </Layout>
  );
}