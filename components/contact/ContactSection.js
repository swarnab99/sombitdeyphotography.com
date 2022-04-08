import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const ContactSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading, details } = slice.primary;
	return (
		<div className='section-banner'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span className='dorothea-heading-meta'>{subheading[0]?.text}</span>
						<h2 className='dorothea-heading'>{heading[0]?.text}</h2>
					</div>
				</div>
				<div className='row mb-30'>
					<div className='col-md-6 offset-md-3 text-center mb-30'>
						<RichText render={details} serializeHyperlink={CustomLink} />
					</div>

					<div className='col-md-6 text-center offset-md-3'>
						<h3 className='dorothea-contact-heading'>Contact Form</h3>
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
								<div className='col-md-12 form-group'>
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
										name='phone'
										type='text'
										placeholder='Your Number *'
										required
									/>
								</div>
								<div className='col-md-12 form-group'>
									<input
										name='subject'
										type='text'
										placeholder='Subject *'
										required
									/>
								</div>
								<div className='col-md-12 form-group'>
									<textarea
										name='message'
										id='message'
										cols='30'
										rows='4'
										placeholder='Message *'
										required></textarea>
								</div>
								<div className='col-md-12'>
									<input name='submit' type='submit' value='Send Message' />
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
