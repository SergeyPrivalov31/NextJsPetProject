import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
	return (
		<>
			<Head>
				<title>Next.JS application Pet</title>
				<meta name="keywords" content="next, javascript, nextjs, react" />
				<meta name="description" content="this is tutorial for next" />
				<meta charSet="utf-8" />
			</Head>

			<h1>Hello Next.js!!!</h1>
			<p>Some text about my butyfull life</p>
			<p><Link href={'/about'}><a>About</a></Link></p>
			<p><Link href={'/posts'}><a>Posts</a></Link></p>
		</>
	)
}