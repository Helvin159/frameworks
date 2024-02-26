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
import ScrollToTop from './utils/ScrollToTop';
import { InformationPageProvider } from './contexts/InformationPageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop>
				<InformationPageProvider>
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
				</InformationPageProvider>
			</ScrollToTop>
		</BrowserRouter>
	</React.StrictMode>
);
