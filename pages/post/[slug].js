import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import BlogContent from '../../components/BlogContent';
import matter from 'gray-matter'
import CodeBlock from "../../CodeBlock";

const ReactMarkdown = require('react-markdown/with-html')

export default function PostTemplate({content, data}) {
  const router = useRouter();
  const frontmatter = data;
  return (
    <Layout>
      <BlogContent className="blogcontent">
        <ReactMarkdown className="markdown" escapeHtml={false} source={content} renderers={{code: CodeBlock}}/>
      </BlogContent>
    </Layout>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`)

  // Parse .md data through `matter`
  const data = matter(content.default)

  // Pass data to the component props
  return { ...data }
}
