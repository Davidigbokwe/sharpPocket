import React from 'react';

export const Merchant = () => {
	return (
		<section className="py-20 px-4 bg-white">
			<div className="container mx-auto max-w-6xl text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Merchants</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Accept payments, manage transactions, and grow your business with Sharp Pocket's merchant tools.
				</p>
				<div className="mt-6">
					<a href="/merchants" className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black text-white shadow-md hover:shadow-lg transition-all">
						<span className="font-medium">Explore Merchant Setup</span>
					</a>
				</div>
			</div>
		</section>
	);
};
