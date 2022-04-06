import { useEffect } from 'react';
import lozad from 'lozad';
import { Client } from '../../utils/prismicHelpers';
import { queryRepeatableDocuments } from '../../utils/queries';
import { SliceZone } from '../../slices';
import SEO from '../../components/seo/SEO';

const PortfolioPage = ({ doc }) => {
	// console.log(blogPosts);
	// ========== LOZAD INSTANTIATE ==========
	useEffect(() => {
		const observer = lozad('.lozad', {
			rootMargin: '100px 0px', // syntax similar to that of CSS Margin
		});
		observer.observe();
		return () => {};
	}, [doc?.uid]);
	// ========== END ==========
	return (
		<>
			<SEO
				doc={doc}
				url={`https://sombitdeyphotography.com/portfolio/${doc?.uid}`}
			/>
			<SliceZone sliceZone={doc.data.body} />
		</>
	);
};

export async function getStaticPaths() {
	const documents = await queryRepeatableDocuments(
		(doc) => doc.type === 'portfolio_page'
	);
	return {
		paths: documents.map((doc) => {
			return { params: { slug: doc.uid } };
		}),
		fallback: 'blocking',
	};
}

export async function getStaticProps({
	preview = null,
	previewData = {},
	params,
}) {
	const { ref } = previewData;

	const client = Client();

	const doc =
		(await client.getByUID(
			'portfolio_page',
			params.slug,
			ref ? { ref } : null
		)) || {};

	if (doc.id == undefined) {
		return {
			props: null,
			notFound: true,
		};
	}

	return {
		props: {
			doc,
			preview,
		},
		revalidate: 60,
	};
}

export default PortfolioPage;
