/* eslint-disable @next/next/no-img-element */

const BlogsSection = () => {
	return (
		<div className='section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<span
							className='dorothea-heading-meta animate-box'
							data-animate-effect='fadeInUp'>
							Read
						</span>
						<h2
							className='dorothea-heading animate-box'
							data-animate-effect='fadeInUp'>
							News &amp; Blog
						</h2>
					</div>
				</div>
				<div className='row'>
					<BlogItem />
					<BlogItem />
					<BlogItem />
				</div>
			</div>
		</div>
	);
};

const BlogItem = () => {
	return (
		<div className='col-md-4 animate-box' data-animate-effect='fadeInUp'>
			<div className='blog-entry'>
				<a href='post.html' className='blog-img'>
					<img src='/images/blog/02.jpg' className='img-fluid' alt='' />
				</a>
				<div className='desc'>
					<span>Sep 25, 2022</span>
					<h3>
						<a href='post.html'>Wedding Viverra Convallis</a>
					</h3>
					<p>
						Fusce suscipit ante miss helena the ulamcore risus nis cursu drana
						in hiverra ante nulla vel..
					</p>
					<a className='underline-text' href='post.html'>
						Read more <i className='ti-arrow-right'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default BlogsSection;
