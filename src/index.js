import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DealProvider } from './contexts/DealContext';
import { CartProvider } from './contexts/CartContext';
import { MenuProvider } from './contexts/MenuContext';
import { ReviewProvider } from './contexts/ReviewModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MenuProvider>
				<DealProvider>
					<ReviewProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</ReviewProvider>
				</DealProvider>
			</MenuProvider>
		</BrowserRouter>
	</React.StrictMode>
);
