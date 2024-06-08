import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Box, Button, Card, CardBody, Heading, Text } from "@chakra-ui/react";

const AddToCartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Card margin={'auto'} textAlign={'center'} padding={"30px"}>
      <Text textAlign={"center"} fontSize={"large"} fontWeight={"bold"}>Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <Text textAlign={'center'}>Your cart is empty.</Text>
      ) : (
        <Box width={"50%"} textAlign={'center'} margin={'aotu'}>
          {cartItems.map((item) => (
            <CardBody key={item.id} >
              <Heading>{item.title}</Heading>
              <Text textAlign={'center'} fontWeight={'bold'}>${item.price}</Text>
              <Button margin={'auto'} backgroundColor={'lightBLue'} onClick={() => removeFromCart(item.id)}>Remove</Button>
            </CardBody>
          ))}
          <Link to="/BuyProductPage">
            <Button margin={'auto'} backgroundColor={'lightGreen'}>Checkout</Button>
          </Link>
        </Box>
      )}
    </Card>
  );
};

export default AddToCartPage;
