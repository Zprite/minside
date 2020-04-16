import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href="/post/[slug]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Apps() {
  return (
    <Layout>
      <h1>Apper</h1>
      <ul>
        <PostLink id="terminus" title="terminus" />
      </ul>
    </Layout>
  );
}
