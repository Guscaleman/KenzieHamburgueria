import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setShowCart, count }) => {
	return (
		<header className={styles.header}>
			<img src={Logo} alt="Logo Kenzie Burguer" />
			<div>
				<button onClick={() => setShowCart(true)}>
					<MdShoppingCart size={21} />
					<span>{count}</span>
				</button>
			</div>
		</header>
	);
};
