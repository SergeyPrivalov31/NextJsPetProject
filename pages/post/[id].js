//import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';
import Link from 'next/link';

export default function Post({ post }) {
	// const router = useRouter();
	// console.log(router);
	return (
		<MainLayout title={post.title}>
			<h1>{post.title}</h1>
			<hr />
			<p>{post.body}</p>
			<Link href={'/posts'}><a>Back to all posts</a></Link>
		</MainLayout>
	)
}

Post.getInitialProps = async (ctx) => {
	const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
	const post = await response.json()

	return {
		post
	}
}