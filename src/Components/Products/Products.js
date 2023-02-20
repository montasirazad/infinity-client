import React from 'react';
import Product from '../Product/Product';
import Header from '../shared/Header/Header';



const allProducts = [
    {
        id: 1,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Plastic',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    },
    {
        id: 2,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Craft Paper',
        type: 'single wall cup',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    },
    {
        id: 3,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'wood pulp paper',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    }
    ,
    {
        id: 4,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Plastic',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    }
    ,
    {
        id: 5,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Plastic',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    }
    ,
    {
        id: 6,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Plastic',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    }
    ,
    {
        id: 7,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Plastic',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    }
    ,
    {
        id: 8,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Plastic',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    }
    ,
    {
        id: 9,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Plastic',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    }
    ,
    {
        id: 10,
        name: 'cold beverage cup for juice drinking cup for one time use',
        volume: '12 OZ/375 ML',
        material: 'Plastic',
        type: 'PET',
        use: 'Coffee, Juice, Beer, Mineral Water, VODKA, Tea, Soda',
        img: 'https://s.alicdn.com/@sc04/kf/H7e0783d7816b430caa6efe6abbfee63bJ/229435408/H7e0783d7816b430caa6efe6abbfee63bJ.jpg?quality=close'

    }
]


const Products = () => {

    return (
        <div>
            <Header />

            <div className='d-flex justify-content-evenly flex-wrap '>
                {
                    allProducts.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;