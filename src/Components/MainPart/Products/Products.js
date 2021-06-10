import React, { useEffect, useState } from "react";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://protected-fjord-17093.herokuapp.com/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);
	console.log("====================================");
	console.log(products);
	console.log("====================================");
	return (
		<div className="grid   grid-cols-1 md:grid-cols-4  justify-center	items-center mx-20 my-8">
			{products.map((pd) => {
				return (
					<>
						<div className="w-64  text-center border-4  pb-6 pt-5 rounded-2xl hover:border-green-800 mx-4 my-8">
							<img
								src={pd.img}
								alt=""
								className="mx-5"
							/>
							<div>
								<p className="text-red-500">
									৳{pd.price}
								</p>
							</div>
							<h2>{pd.name}</h2>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Products;
