/* eslint-disable @next/next/no-img-element */
import { RichText } from 'prismic-reactjs';

const ReviewsSection = ({ slice }) => {
	// console.log(slice);
	const { heading, subheading } = slice.primary;
	return (
		<div className='section-banner'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>{subheading[0]?.text}</span>
						<h3 className='dorothea-post-heading'>{heading[0]?.text}</h3>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='clear' id='comment-list'>
							<div className='comments-area' id='comments'>
								<ol className='comment-list'>
									{slice.items.map((item, index) => (
										<ReviewItem key={index} data={item} />
									))}
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const ReviewItem = ({ data }) => {
	const { title, image, details } = data;
	return (
		<li className='comment'>
			<div className='comment-body'>
				<div className='comment-author vcard'>
					<img className='avatar photo' src={image?.url} alt={image?.alt} />
					<h3 className='name mb-2'>{title[0]?.text}</h3>
				</div>
				<RichText render={details} />
			</div>
		</li>
	);
};

export default ReviewsSection;
