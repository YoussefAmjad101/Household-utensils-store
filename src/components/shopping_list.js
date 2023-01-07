import { useState } from 'react'
import { ProductList } from '../data/data'
import ProductItem from './product_item'
import Categories from './categories'

const ShoppingList = ({ cart, updateCart }) => {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = ProductList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	const addToCart = (name, price) => {
		const currentProductAdded = cart.find((Product) => Product.name === name)
		if (currentProductAdded) {
			const cartFilteredCurrentProduct = cart.filter(
				(Product) => Product.name !== name
			)
			updateCart([
				...cartFilteredCurrentProduct,
				{ name, price, amount: currentProductAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className="">
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className="row">
				{ProductList.map(({ id, cover, name, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div className='col-3' key={id}>
							<ProductItem
								cover={cover}
								name={name}
								price={price}
							/>
							<button className='btn btn-sm btn-outline-primary mt-2' onClick={() => addToCart(name, price)}>Add</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList;