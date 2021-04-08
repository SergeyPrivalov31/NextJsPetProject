import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function About() {
	const linkToHomeHandler = () => {
		Router.push('/')
	}

	return <MainLayout title={"About page"} >
		<h1>About Page</h1>
		<button onClick={linkToHomeHandler}>GO to Home page</button>
		<button onClick={() => { Router.push('/posts') }}>GO to posts</button>
	</MainLayout>
}