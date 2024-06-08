// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {CardBody, Image, Stack, Heading, Text, Card, Divider, CardFooter, ButtonGroup, Button} from "@chakra-ui/react"
// import CategoryRoute from "../components/cateRoute";

export default function SingleProduct() {

    const [product, setProduct] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
  
      fetchData();
    }, [id]);
    
    if (!product) {
        return <div>Loading...</div>;
    }
  
    return (
        <Card width={'20%'} textAlign={'center'} margin={'auto'}>
            <CardBody h={'auto'} textAlign={'center'}>
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
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2' justifyContent={'space-evenly'}>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
        </Card>
    );
}


