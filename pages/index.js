import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout'

const PostLink = props => (
	<li>
		<Link href="/p/[id]" as={`/p/${props.id}`}>
			<a>{props.id}</a>
		</Link>
	</li>
);

export default function Index(){
    return(	
			<Layout>
				<h1>BLOG</h1>
				<ul>
					<PostLink id="RGB_cube" title="RGB kube"/>
					<PostLink id="terminus" title="terminus"/>
					<PostLink id="keypad" title="keypad"/>
				</ul>
			</Layout>
    );
}