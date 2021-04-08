import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';

export default function Index() {
	return (
		<MainLayout title={"Home Page"}>
			<h1>Hello Next.js!!!</h1>
			<p>Some text about my butyfull life</p>
			<p><Link href={'/about'}><a>About</a></Link></p>
			<p><Link href={'/posts'}><a>Posts</a></Link></p>
		</MainLayout>
	)
}