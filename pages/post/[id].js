import { useRouter } from 'next/router';

export default function () {
	const router = useRouter();
	console.log(router);
	return <h1>Post {router.query.id} </h1>
}