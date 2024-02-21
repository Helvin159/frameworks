import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ReviewContext } from '../contexts/ReviewContext';

const AllReviews = () => {
	const review = useContext(ReviewContext);
	console.log(review, 'review');
	const reviews = [
		{
			customerName: 'Mia A',
			image: 'https://randomuser.me/api/portraits/women/75.jpg',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.5,
		},
		{
			customerName: 'Lydia Simmons',
			image: 'https://randomuser.me/api/portraits/women/30.jpg',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt. Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.0,
		},
		{
			customerName: 'Alan Davis',
			image: 'https://randomuser.me/api/portraits/men/22.jpg',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.5,
		},
		{
			customerName: 'Megan Owens',
			image: 'https://randomuser.me/api/portraits/women/92.jpg',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.8,
		},
		{
			customerName: 'Cameron Fisher',
			image: 'https://randomuser.me/api/portraits/men/11.jpg',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.7,
		},
		{
			customerName: 'Jorge Ortiz',
			image: 'https://randomuser.me/api/portraits/men/12.jpg',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.0,
		},
		{
			customerName: 'Isobel Rodriquez',
			image: 'https://randomuser.me/api/portraits/women/70.jpg',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt. Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt. Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.5,
		},
		{
			customerName: 'Lucille Hanson',
			image: 'https://randomuser.me/api/portraits/women/2.jpg',
			customerReview:
				'Very nice product that I have seen on Tiktok. Now I always film my baby and upload on it. Became the best decor in my bedroom. I ordered the second one 3 days ago, amazing no doubt.',
			rating: 4.8,
		},
	];
	return (
		<Container fluid className='all-reviews'>
			<Row className='all-reviews__content'>
				{reviews.map((i, k) => (
					<Col xs={12} sm={4} md={3} key={k}>
						<img className='img-fluid' src={i.image} alt={i.customerName} />
						<h4>{i.customerName}</h4>
						<p>{i.customerReview}</p>
						<p>{i.rating}</p>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AllReviews;
