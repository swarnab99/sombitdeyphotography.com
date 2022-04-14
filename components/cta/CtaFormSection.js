import { useState } from 'react';
import Airtable from 'airtable';

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const CtaFormSection = ({ slice }) => {
	// console.log(slice);
	const { heading, subheading, background_image } = slice?.primary;

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		type: '',
		date: '',
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
			const data = await base('Queries').create([
				{
					fields: {
						Name: formData.name,
						'Type of shoot': formData.type,
						Date: formData.date,
						Phone: formData.phone,

						Source: location.href,
						Status: 'Todo',
					},
				},
			]);

			// console.log(data);

			setFormData({
				name: '',
				phone: '',
				type: '',
				date: '',
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
		<section
			style={{
				backgroundImage: `url(${background_image?.url}) `,
			}}
			className='section-padding bg-dark section-overlay position-relative'>
			<div className='col-md-6 text-center offset-md-3 cta-form'>
				<h2 className='dorothea-heading mb-0'>{heading[0]?.text}</h2>
				<p>{subheading[0]?.text}</p>
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
						<div className='col-md-6 form-group'>
							<input
								name='name'
								type='text'
								value={formData.name}
								onChange={handleChange}
								placeholder='Your Name *'
								required
							/>
						</div>
						<div className='col-md-6 form-group'>
							<input
								name='phone'
								type='text'
								value={formData.phone}
								onChange={handleChange}
								placeholder='Your Phone *'
								required
							/>
						</div>
						<div className='col-md-6 form-group'>
							<input
								name='type'
								type='text'
								value={formData.type}
								onChange={handleChange}
								placeholder='Type of Shoot *'
								required
							/>
						</div>
						<div className='col-md-6 form-group'>
							<input
								name='date'
								type='date'
								value={formData.date}
								onChange={handleChange}
								placeholder='Booking Date *'
								required
							/>
						</div>
						<div className='col-md-12'>
							<input
								className='m-0'
								name='submit'
								type='submit'
								value={loading ? 'Sending...' : 'Submit'}
							/>
						</div>
					</div>

					<footer>
						{error && (
							<div className='col-lg-12 col-md-12 col-sm-12 mb-4 mt-5'>
								<p className='text-danger text-center h2'>{error.message}</p>
							</div>
						)}
						{success && (
							<div className='col-lg-12 col-md-12 col-sm-12 mb-4 mt-5'>
								<p className='text-success text-center h2'>
									Thanks, we will contact you soon.
								</p>
							</div>
						)}
					</footer>
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
