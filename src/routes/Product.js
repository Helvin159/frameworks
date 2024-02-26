import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductPreview from '../components/ProductPreview/ProductPreview';
import SiteWideMsg from '../components/SiteWideMsg';
import Description from '../components/Description';
import LatestReviewsNoCopy from '../components/LatestReviewsNoCopy';
import AllReviews from '../components/AllReviews';
import Loading from '../components/Loading';

const Product = ({ products, productDescription }) => {
	const params = useParams();

	let product = null;

	for (let i = 0; i < products?.items.length; i++) {
		if (
			products.items[i].fields.slug.toString().toLowerCase() ===
			params.slug.toString().toLowerCase()
		)
			product = { ...products.items[i] };
	}

	if (!products) return <Loading />;

	if (!product) return <Loading />;

	return (
		<Fragment>
			<ProductPreview product={product} />

			{productDescription?.items?.map((i, k) => (
				<Description
					reversed={k % 2 === 1 && true}
					img={`https:${i.fields.featuredImage.fields.file.url}`}
					heading={i.fields.title}
					copy={i.fields.copy}
					key={k}
				/>
			))}

			<SiteWideMsg msg={'3700+ customers re-living their cherished memories'} />
			<LatestReviewsNoCopy />
			<AllReviews />
		</Fragment>
	);
};

export default Product;
