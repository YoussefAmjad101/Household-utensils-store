import { useState} from 'react'

const Cart = ({ cart, updateCart }) => {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, productType) => acc + productType.amount * productType.price,
		0
	)

	return isOpen ? (
		<div className=''>
			<button
				className='btn btn-sm btn-outline-danger my-3'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Basket</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price} DH x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total} DH</h3>
					<button className='btn btn-sm btn-outline-secondary my-3' onClick={() => updateCart([])}>Make empty your basket</button>
				</div>
			) : (
				<div>Your basket is empty</div>
			)}
		</div>
	) : (
		<div className=''>
			<button
				className='btn btn-sm btn-outline-success'
				onClick={() => setIsOpen(true)}
			>
				Open the basket
			</button>
		</div>
	)
}

export default Cart;