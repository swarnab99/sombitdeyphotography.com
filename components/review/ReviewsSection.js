/* eslint-disable @next/next/no-img-element */

const ReviewsSection = () => {
	return (
		<div className='section-banner'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>Reviews</span>
						<h3 className='dorothea-post-heading'>Feedback</h3>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='clear' id='comment-list'>
							<div className='comments-area' id='comments'>
								<ol className='comment-list'>
									<ReviewItem />
									<ReviewItem />
									<ReviewItem />
									<ReviewItem />
									<ReviewItem />
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const ReviewItem = () => {
	return (
		<li className='comment'>
			<div className='comment-body'>
				<div className='comment-author vcard'>
					<img className='avatar photo' src='/images/feedback/1.jpg' alt='' />
					<h3 className='name mb-2'>Eleanor & Stefano</h3>
				</div>
				<p>
					Dorothea non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter
					nunc volutpa mollis sapien veli, conseyer turpeutionyer massa in libe
					semper sedeuter nunc volutpat the sapien veletion. Quisque gravida
					eros ut turpis interdum ornare. Interdum et malesu they adamale fames
					ac ante ipsum primis in faucibus. Curabitur arcu erosite feugia.
				</p>
			</div>
		</li>
	);
};

export default ReviewsSection;
