import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './cart.scss';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      img2: 'https://images.unsplash.com/photo-1622445270936-5dcb604970e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Short Sleeve White T-shirt',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus soluta voluptate corporis nam officia rem placeat asperiores explicabo minima ratione, ullam commodi voluptatum cupiditate aliquid cumque quos minus atque!',
      isNew: true,
      oldPrice: 19.99,
      price: 12.9,
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      img2: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Brown Coat',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus soluta voluptate corporis nam officia rem placeat asperiores explicabo minima ratione, ullam commodi voluptatum cupiditate aliquid cumque quos minus atque!',
      isNew: true,
      oldPrice: 19.99,
      price: 12.9,
    },
  ];

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className='item' key={item.id}>
          <img src={item.img} alt='' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>

            <div className='price'>1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123.09</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
};

export default Cart;
