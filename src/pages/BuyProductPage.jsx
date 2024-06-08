import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Button, CardBody, Box, Text } from '@chakra-ui/react';

const BuyProductPage = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  function handleDone() {
    alert("Purchase completed successfully!")
  }

  return (
    <Box textAlign={'center'} fontSize={'large'} fontWeight={'bold'}>
      <Text>Buy Products</Text>
      {cartItems.map((item) => (
        <CardBody key={item.id}>
          <Text>{item.title} - ${item.price}</Text>
        </CardBody>
      ))}
      <br />
      <br />
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <Link to={"/"}>
        <Button margin={'auto'} backgroundColor={'lightBLue'} onClick={handleDone}>Pay</Button> {/* Removed () after handleDone */}
      </Link>
    </Box>
  );
};

export default BuyProductPage;
