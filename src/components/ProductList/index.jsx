import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({
	productList,
	cartList,
	setCartList,
	setShowCart,
	setCount,
	count,
	notify,
}) => {
	return (
		<ul className={styles.container}>
			{productList.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					cartList={cartList}
					setCartList={setCartList}
					setShowCart={setShowCart}
					setCount={setCount}
					count={count}
					notify={notify}
				/>
			))}
		</ul>
	);
};
