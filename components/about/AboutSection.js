/* eslint-disable @next/next/no-img-element */

const AboutSection = () => {
	return (
		<div className='section-banner'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						{' '}
						<span className='dorothea-heading-meta'>Welcome</span>
						<h2 className='dorothea-heading'>About Me</h2>{' '}
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						{' '}
						<img
							src='/images/_SDP0335-copy.jpeg'
							className='img-fluid mb-30'
							alt='dorothea'
						/>{' '}
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						{' '}
						<span className='dorothea-heading-meta'>Creative Photographer</span>
						<h2>About Sombit Dey Photography</h2>
						<p>
							Quisque bibendum tincidunt varius. Vestibulum viverra bibendum
							magna, mattis gravida sapien tincidunt ut. Donec felis nunc,
							dapibus quis facilisis quis, placerat vitae massa. Curabitur
							consectetu mi tellus in dignissim nibh maximus tempus. Cras vel
							metus nec eros laoreet ullamcorper sed sit amet lectus.
						</p>
						<p>
							Quisque bibendum tincidunt varius. Vestibulum viverra bibendum
							magna, mattis gravida sapien tincidunt ut. Photo felis nunc,
							dapibus quis facilisis quis placerat vitae massa. Curabitur
							consectetur mi tellus in dignissim nibh maximus tempus. Cras vel
							metus nec eros laoreet ullamcorper sed sit amet lectus.{' '}
						</p>{' '}
						<div>
							<a href='#' className='btn button'>
								Contact Me
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
