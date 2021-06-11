import { useState, useEffect } from 'react';
import ProductDetail from './productDetail'
import { getFirestore } from '../../db/index'
import { useParams } from 'react-router-dom'

function ProductDetailContainer() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const db = getFirestore();

    useEffect(() => {

        db.collection('products').doc(id).get()
            .then(doc => {
                if (doc.exists) {
                    setProduct({ id: doc.id, data: doc.data() })
                }
            })
            .catch(e => console.log(e))
    }, [db, id]);

    return (
        <section className="container" id="ItemDetailContainer">
            {
                product.data !== undefined ?

                    <div className="container-fluid" id="ItemDetail">
                        {
                            <ProductDetail
                            photo={product.data.photo}
                            name={product.data.name}
                            price={product.data.price}
                            longinfo={product.data.longinfo}
                            categ={product.data.category}
                            />
                        }
                    </div>
                    :
                    <p className="mensaje">Cargando producto...</p>
            }
        </section>
    )
}

export default ProductDetailContainer;