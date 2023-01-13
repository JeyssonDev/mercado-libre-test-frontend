import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { searchService } from '../../helpers/api';

const ProductList = () => {
    const [items, setItems] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        searchService({ searchText: searchParams.get('search') }).then(
            setItems
        );
    }, [searchParams]);

    return (
        <div className="view">
            {items.map((item) => {
                return (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        seller={item.seller_address.state.name}
                        image={item.thumbnail}
                        status={
                            item.attributes.find(
                                (attribute) => attribute.id === 'ITEM_CONDITION'
                            ).value_name
                        }
                    />
                );
            })}
        </div>
    );
};

export default ProductList;
