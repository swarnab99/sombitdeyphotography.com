import { useState } from 'react';
import Airtable from 'airtable';
import { RichText } from 'prismic-reactjs';
import { CustomLink } from '../../utils/prismicHelpers';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const ContactSection = ({ slice }) => {
	// console.log(slice);
	const { subheading, heading, details } = slice.primary;

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		date: '',
		type: '',
		location: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setError(null);
		setSuccess(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = await base('Bookings').create([
				{
					fields: {
						Name: formData.name,
						Email: formData.email,
						Phone: formData.phone,
						Date: formData.date,
						'Type of shoot': formData.type,
						Location: formData.location,
						Message: formData.message,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				name: '',
				email: '',
				phone: '',
				date: '',
				type: '',
				location: '',
				message: '',
			});
			setSuccess(true);
			setLoading(false);
		} catch (error) {
			setError(error);
			console.log(error);
			setLoading(false);
		}
	};

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
						<h3 className='dorothea-contact-heading'>
							Please Fill up This Form
						</h3>
						<p>We will contact you soon</p>
						<form onSubmit={handleSubmit} className='contact__form'>
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
										value={formData.name}
										onChange={handleChange}
										type='text'
										placeholder='Your Name *'
										required
									/>
								</div>
								<div className='col-md-6 form-group'>
									<input
										name='email'
										value={formData.email}
										onChange={handleChange}
										type='email'
										placeholder='Your Email *'
										required
									/>
								</div>
								<div className='col-md-6 form-group'>
									<input
										name='phone'
										value={formData.phone}
										onChange={handleChange}
										type='text'
										placeholder='Your Number *'
										required
									/>
								</div>
								<div className='col-md-6 form-group'>
									<input
										name='location'
										value={formData.location}
										onChange={handleChange}
										type='text'
										placeholder='Location *'
										required
									/>
								</div>
								<div className='col-md-6 form-group'>
									<input
										name='date'
										value={formData.date}
										onChange={handleChange}
										type='date'
										placeholder='Date *'
										required
									/>
								</div>
								<div className='col-md-12 form-group'>
									<input
										name='type'
										value={formData.type}
										onChange={handleChange}
										type='text'
										placeholder='Type of Shoot *'
										required
									/>
								</div>
								<div className='col-md-12 form-group'>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleChange}
										id='message'
										cols='30'
										rows='4'
										placeholder='Message'></textarea>
								</div>
								<div className='col-md-12'>
									<input
										name='submit'
										type='submit'
										value={loading ? 'Sending...' : 'Submit'}
									/>
								</div>
							</div>

							<footer
								className={`notification-box mt-5 mb-5 ${
									success ? 'show-success' : error ? 'show-error' : ''
								}`}>
								{error && (
									<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
										<p className='text-danger text-center h2'>
											{error.message}
										</p>
									</div>
								)}
								{success && (
									<div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
										<p className='text-success text-center h2'>
											Thanks, we will contact you soon.
										</p>
									</div>
								)}
							</footer>
						</form>
					</div>
				</div>
			</div>

			<div className='container mt-60'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6841786372347!2d88.35962331495992!3d22.590912485173444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe80affb8ef5ffce1!2sSOMBIT%20DEY%20PHOTOGRAPHY!5e0!3m2!1sen!2sin!4v1649945354175!5m2!1sen!2sin'
					width='100%'
					height='450'
					frameBorder='0'
					allowFullScreen=''></iframe>
			</div>
		</div>
	);
};

export default ContactSection;
