/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* ===== CSS FILES ===== */}
					<link rel='stylesheet' href='/css/animate.css' />
					<link rel='stylesheet' href='/css/themify-icons.css' />
					<link rel='stylesheet' href='/css/bootstrap.css' />
					<link rel='stylesheet' href='/css/style.css' />

					{/* ===== FONT ===== */}

					{/* ===== PREFETCH ===== */}
					<link rel='preconnect' href='https://images.prismic.io/' />
					<link rel='dns-prefetch' href='https://images.prismic.io/' />

					{/* FAVICONS */}
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#686868' />
					<meta name='msapplication-TileColor' content='#000000' />
					<meta name='theme-color' content='#000000' />

					{/* SCRIPTS */}
					<script
						async
						defer
						src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${process.env.PRISMIC_ID}`}></script>
					<script
						defer
						data-domain={`${process.env.PRISMIC_ID}.com`}
						src='https://plausible.io/js/plausible.js'></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
