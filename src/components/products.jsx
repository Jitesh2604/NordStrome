import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from './Loading';
import Error from './Error';
import { Card, Grid, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react";
import { CategoriesContext } from "../context/categoeiesContext";
import { useCart } from "../context/CartContext"

const Products = () => {
  const { categories } = useContext(CategoriesContext);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      let response;
      if(categories) {
        response = await axios.get(`https://fakestoreapi.com/products/${categories}`);
      } else {
        response = await axios.get(`https://fakestoreapi.com/products/`);
      }
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [categories]); 

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if(data.length === 0) {
    return <Error />;
  }

  return (
    <Card >
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        {data.map((product) => (
          <div key={product.id} style={{
            borderRadius: "10px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}>
            <CardBody h={'auto'} textAlign={'center'}>
              <Link to={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  borderRadius='lg'
                  h={'100px'}
                  margin={'auto'}
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{product.title}</Heading>
                  <Text>{product.category}</Text>
                  <Text color='blue.600' fontSize='2xl'>
                    ${product.price}
                  </Text>
                </Stack>
              </Link>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2' justifyContent={'space-evenly'}>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue' onClick={() => handleAddToCart(product)}>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </div>
        ))}
      </Grid>
    </Card>
  );
};

export default Products;
