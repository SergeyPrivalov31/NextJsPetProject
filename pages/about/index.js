import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function About({ title }) {
	const linkToHomeHandler = () => {
		Router.push('/')
	}

	return <MainLayout title={"About page"} >
		<h1>{title}</h1>

		<button onClick={linkToHomeHandler}>GO to Home page</button>
		<button onClick={() => { Router.push('/posts') }}>GO to posts</button>
	</MainLayout>
}

About.getInitialProps = async () => {
	const response = await fetch('http://localhost:4200/about')
	const data = await response.json()

	return {
		title: data.title
	}
}