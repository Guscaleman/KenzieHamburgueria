import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss";
import { useKey } from "../../hooks/useKey";

export const CartModal = ({
	cartList,
	setCartList,
	setShowCart,
	setCount,
	count,
}) => {

	const buttonRef = useKey("Escape", (element) => {
		element.click();
	})

	const total = cartList.reduce((prevValue, product) => {
		return prevValue + product.price;
	}, 0);

	const clearCart = () => {
		setCartList([]);
		setCount(0);
	};

	return (
		<div className={styles.container} role="dialog">
			<div className={styles.content}>
				<div className={styles.content__header}>
					<h2>Carrinho de compras</h2>
					<button
						ref={buttonRef}
						onClick={() => setShowCart(false)}
						aria-label="close"
						title="Fechar"
					>
						<MdClose size={21} />
					</button>
				</div>
				<div className={styles.content__list}>
					<ul>
						{cartList.map((product) => (
							<CartItemCard
								key={product.id}
								product={product}
								cartList={cartList}
								setCartList={setCartList}
								setCount={setCount}
								count={count}
							/>
						))}
					</ul>
				</div>
				<div className={styles.content__footer}>
					<div className={styles.content__price}>
						<span>Total</span>
						<span>
							{total.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</span>
					</div>
					<button className="btn-default" onClick={clearCart}>
						Remover todos
					</button>
				</div>
			</div>
		</div>
	);
};
