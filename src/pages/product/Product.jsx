import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import './product.scss';

const images = [
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
];

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={(e) => setSelectedImage(0)} />
          <img src={images[1]} alt='' onClick={(e) => setSelectedImage(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImage]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span className='price'>19.99</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          inventore doloribus aliquam neque quisquam mollitia quam, repellat
          accusantium quasi eaque quidem praesentium tenetur corrupti magnam
          beatae harum doloremque voluptatem. Optio.
        </p>
        <div className='quantity'>
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className='item'>
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className='info'>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className='info'>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
