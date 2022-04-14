/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
dayjs().format();
import countapi from 'countapi-js';

const BlogsSection = ({ blogPosts }) => {
	// console.log(blogPosts);
	return (
		<div className='section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>Read More</span>
						<h2 className='dorothea-heading'>Blog Posts</h2>
					</div>
				</div>
				<div className='row'>
					{blogPosts?.data?.allBlog_posts?.edges?.map((item, index) => (
						<BlogItem key={index} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

const BlogItem = ({ data }) => {
	const { title, description, featured_image, published_date, _meta } =
		data.node;
	/* ===== COUNT & UPDATE NO. OF VIEWS ===== */
	const [views, setViews] = useState(0);
	useEffect(() => {
		countapi.get(`${process.env.PRISMIC_ID}.com`, _meta?.uid).then((result) => {
			result?.value && setViews(result.value);
		});
	}, [_meta?.uid]);
	/* ===== END ===== */
	return (
		<div className='col-md-4'>
			<div className='blog-entry'>
				<Link href={`/blog/${_meta?.uid}`}>
					<a className='blog-img'>
						<img
							data-src={featured_image?.medium?.url}
							alt={featured_image?.alt}
							className='img-fluid lozad'
						/>
					</a>
				</Link>
				<div className='desc'>
					<span className='d-inline-block'>
						{dayjs(published_date).format('DD MMM, YYYY')}
					</span>
					<span className='d-inline-block pl-4'>{views} Views</span>
					<h3>
						<Link href={`/blog/${_meta?.uid}`}>
							<a>{title[0]?.text}</a>
						</Link>
					</h3>
					<p>{description[0]?.text}</p>
					<Link href={`/blog/${_meta?.uid}`}>
						<a className='underline-text'>
							Read more <i className='ti-arrow-right'></i>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogsSection;
