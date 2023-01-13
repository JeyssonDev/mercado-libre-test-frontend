import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo_ML.png';
import iconSerch from '../../assets/icons/ic_Search.png';
import styles from './index.module.sass';

const Header = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.target.elements.search.value;
        if (searchValue) {
            navigate(`/items?search=${searchValue}`, { replace: true });
        } else {
            navigate('/', { replace: true });
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.searchContent}>
                <Link to="/" className={styles.imageContent}>
                    <img src={logo} alt="Mercado Libre" />
                </Link>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        name="search"
                        type="text"
                        placeholder="Nunca dejes de buscar"
                    />
                    <button className={styles.btnSearch}>
                        <img src={iconSerch} alt="" />
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
