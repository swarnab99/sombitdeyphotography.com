const CtaFormSection = () => {
	return (
		<section
			style={{
				backgroundImage: `url(https://images.prismic.io/sombitdeyphotography/e82d800f-9ce1-40ad-a0f1-e5955228f4ca__SDP9987-1-copy.jpg?auto=compress,format&rect=0,0,1600,800&w=1200&h=600) `,
			}}
			className='section-padding bg-dark section-overlay position-relative'>
			<div className='col-md-6 text-center offset-md-3 cta-form'>
				<h2 className='dorothea-heading mb-0'>Book a Session</h2>
				<p>Interested to work wiht me?</p>
				<form className='contact__form'>
					<div className='row'>
						<div className='col-12'>
							<div
								className='alert alert-success contact__msg d-none'
								role='alert'>
								Your message was sent successfully.
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-6 form-group'>
							<input
								name='name'
								type='text'
								placeholder='Your Name *'
								required
							/>
						</div>
						<div className='col-md-6 form-group'>
							<input
								name='email'
								type='email'
								placeholder='Your Email *'
								required
							/>
						</div>
						<div className='col-md-6 form-group'>
							<input
								name='shoot'
								type='text'
								placeholder='Type of Shoot *'
								required
							/>
						</div>
						<div className='col-md-6 form-group'>
							<input
								name='date'
								type='date'
								placeholder='Booking Date *'
								required
							/>
						</div>
						<div className='col-md-12'>
							<input name='submit' type='submit' value='Submit' />
						</div>
					</div>
				</form>
			</div>

			<style jsx>{`
				.section-overlay:before {
					content: '';
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.7);
				}
				.section-overlay {
					background-attachment: fixed;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
				}

				.cta-form {
					position: relative;
					z-index: 2;
				}
			`}</style>
		</section>
	);
};

export default CtaFormSection;
