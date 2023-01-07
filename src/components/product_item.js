
const ProductItem = ({ cover, name, price }) => {
	return (
			<div className='card border border-2 border-secondary rounded p-4 mt-3'>
                <span className='badge bg-warning'>{price} DH</span>
                <img className='card-img-top' src={cover} alt={`${name} cover`} width="170px" height="170px" />
                {name}
            </div>
	);
}

export default ProductItem;