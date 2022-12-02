import Card from '../card/Card';
import './featured-products.scss';

const data = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    img2: 'https://images.unsplash.com/photo-1622445270936-5dcb604970e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Short Sleeve White T-shirt',
    isNew: true,
    oldPrice: 19.99,
    price: 12.9,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    img2: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Brown Coat',
    isNew: true,
    oldPrice: 19.99,
    price: 12.9,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
    title: 'Black Skirt',
    oldPrice: 19.99,
    price: 12.9,
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Fancy Hat',
    oldPrice: 19.99,
    price: 12.9,
  },
];

const FeaturedProducts = ({ type }) => {
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} Products</h1>
        {
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nisi explicabo, doloremque optio porro qui corporis laudantium ipsam
            adipisci fugiat iusto doloribus, id ex laborum quas fugit illum
            error atque odio. Dolore nam aliquam totam aut repudiandae, odit
            iure eius voluptas, assumenda doloremque animi mollitia unde
            inventore quo ad rem.
          </p>
        }
      </div>
      <div className='bottom'>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
