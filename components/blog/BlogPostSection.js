/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import dayjs from 'dayjs';
dayjs().format();
import countapi from 'countapi-js';

const BlogPostSection = ({ blogPost }) => {
	// console.log(blogPost);
	const uid = blogPost?.uid;
	const { title, description, featured_image, published_date, body } =
		blogPost?.data;

	/* ===== COUNT & UPDATE NO. OF VIEWS ===== */
	const [views, setViews] = useState(0);
	useEffect(() => {
		countapi.hit('theweddart.com', uid).then((result) => {
			result?.value && setViews(result.value);
		});
	}, [uid]);
	/* ===== END ===== */
	return (
		<div className='section-banner'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mb-3'>
						<h1 className='dorothea-post-heading mb-1'>{title[0]?.text}</h1>
						<span className='dorothea-heading-meta'>
							{dayjs(published_date).format('DD MMM, YYYY')} | {views} Views
						</span>
					</div>
					<div className='col-md-12 image-content '>
						<figure className='rounded'>
							<img src={featured_image?.url} alt={featured_image?.alt} />
						</figure>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12 '>
						{body &&
							body.map((item, index) => (
								<DetailsBox key={index} postBlock={item} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

const DetailsBox = ({ postBlock }) => {
	// console.log(postBlock);
	return (
		<div className='post-block'>
			<RichText
				render={postBlock?.primary?.details}
				linkResolver={linkResolver}
			/>

			<div className='mb-5'>
				{postBlock?.items &&
					postBlock?.items.map((item, index) => (
						<div key={index} className='mb-4'>
							<img
								className='img-fluid lozad'
								data-src={item?.image?.url}
								alt={item?.image?.alt}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default BlogPostSection;
