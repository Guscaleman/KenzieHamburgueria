import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";

export const CartItemCard = ({
	product,
	cartList,
	setCartList,
	setCount,
	count,
}) => {
	const removeFromCart = (id) => {
		const filter = cartList.filter((product) => product.id !== id);
		setCartList(filter);
		setCount(count - 1);
	};

	return (
		<li className={styles.container}>
			<img src={product.img} alt={product.name} />
			<div className={styles.content}>
				<h3>{product.name}</h3>
				<span className="body-300">
					{product.price.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
				<button
					onClick={() => removeFromCart(product.id)}
					aria-label="delete"
					title="Remover item"
				>
					<MdDelete size={21} />
				</button>
			</div>
		</li>
	);
};
