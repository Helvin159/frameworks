import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DealProvider } from './contexts/DealContext';
import { CartProvider } from './contexts/CartContext';
import { MenuProvider } from './contexts/MenuContext';
import { ReviewProvider } from './contexts/ReviewModal';
import { SearchProvider } from './contexts/SearchContext';
import { ProductsProvider } from './contexts/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductsProvider>
				<ReviewProvider>
					<MenuProvider>
						<SearchProvider>
							<DealProvider>
								<ReviewProvider>
									<CartProvider>
										<App />
									</CartProvider>
								</ReviewProvider>
							</DealProvider>
						</SearchProvider>
					</MenuProvider>
				</ReviewProvider>
			</ProductsProvider>
		</BrowserRouter>
	</React.StrictMode>
);
