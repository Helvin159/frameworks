import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductsProvider } from './contexts/ProductContext';
import { ReviewProvider } from './contexts/ReviewContext';
import { InformationPageProvider } from './contexts/InformationPageContext';
import { DealProvider } from './contexts/DealContext';
import { CartProvider } from './contexts/CartContext';
import { SearchProvider } from './contexts/SearchContext';
import { MenuProvider } from './contexts/MenuContext';
import { ReviewModalProvider } from './contexts/ReviewModal';
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop>
				<ProductsProvider>
					<ReviewProvider>
						<InformationPageProvider>
							<DealProvider>
								<CartProvider>
									<SearchProvider>
										<MenuProvider>
											<ReviewModalProvider>
												<App />
											</ReviewModalProvider>
										</MenuProvider>
									</SearchProvider>
								</CartProvider>
							</DealProvider>
						</InformationPageProvider>
					</ReviewProvider>
				</ProductsProvider>
			</ScrollToTop>
		</BrowserRouter>
	</React.StrictMode>
);
