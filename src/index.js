import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DealProvider } from './contexts/DealContext';
import { CartProvider } from './contexts/CartContext';
import { MenuProvider } from './contexts/MenuContext';
import { ReviewModalProvider } from './contexts/ReviewModal';
import { SearchProvider } from './contexts/SearchContext';
import { ProductsProvider } from './contexts/ProductContext';
import { ReviewProvider } from './contexts/ReviewContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductsProvider>
				<ReviewProvider>
					<MenuProvider>
						<SearchProvider>
							<DealProvider>
								<ReviewModalProvider>
									<CartProvider>
										<App />
									</CartProvider>
								</ReviewModalProvider>
							</DealProvider>
						</SearchProvider>
					</MenuProvider>
				</ReviewProvider>
			</ProductsProvider>
		</BrowserRouter>
	</React.StrictMode>
);
