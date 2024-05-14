import styles from "./styles.module.scss";

export const ProductCard = ({
	product,
	cartList,
	setCartList,
	setCount,
	count,
	notify,
}) => {
	const addToCart = (product) => {
		if (!cartList.some((cartProduct) => cartProduct.id === product.id)) {
			setCartList([...cartList, product]);
			setCount(count + 1);
		} else {
			notify();
		}
	};

	return (
		<li className={styles.container}>
			<div className={styles.image}>
				<img src={product.img} alt={product.name} />
			</div>
			<div className={styles.content}>
				<h3>{product.name}</h3>
				<span className="caption">{product.category}</span>
				<span className="body-300">
					{product.price.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<button className="btn-default" onClick={() => addToCart(product)}>
					Adicionar
				</button>
			</div>
		</li>
	);
};
