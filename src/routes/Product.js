import React, { Fragment } from 'react';
import ProductPreview from '../components/ProductPreview';
import SiteWideMsg from '../components/SiteWideMsg';
import Description from '../components/Description';
import LatestReviewsNoCopy from '../components/LatestReviewsNoCopy';
import AllReviews from '../components/AllReviews';

const Product = () => {
	const descriptionData = [
		{
			heading: 'PRESERVE THE PRECIOUS MOMENTS',
			copy: "Feel the joy of becoming a parent with SnapFrame™. Preserve your baby's first moments —the heartbeat, tiny fingers, and the early glimpses. Each frame links to the miraculous journey of pregnancy.",
			img: null,
			reversed: false,
		},
		{
			heading: 'THE PERFECT GIFT',
			copy: 'Whether for baby showers, gender reveals, or just to say congrats, the SnapFrame™ stands as a symbol of enduring affection.',
			img: null,
			reversed: true,
		},
		{
			heading: 'EFFORTLESS SETUP',
			copy: 'Connect to any computer using the provided cable, drag, drop—Done! Easily swap or update video  by deleting the old and adding the new! Keep track of every special pregnancy moment, from the first ultrasound to the last month!',
			img: '',
			reversed: false,
		},
	];
	return (
		<Fragment>
			<ProductPreview />

			{descriptionData.map((i, k) => (
				<Description
					reversed={i.reversed}
					img={i.img}
					heading={i.heading}
					copy={i.copy}
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
