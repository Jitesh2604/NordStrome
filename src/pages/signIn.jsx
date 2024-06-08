import {
    Heading,
    Input,
    Button,
    VStack,
    Container,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  async function handleClick() {
    try {
      let resp = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });

      signIn(resp?.data?.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container maxW={"500px"} padding={'20px'} marginBottom={"100PX"} boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          SignIn Page
        </Heading>

        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Link to={"/AddToCart"}>
          <Button variant="outline" colorScheme="red" onClick={handleClick}>
            SignIn
          </Button>
        </Link>
      </VStack>
    </Container>
  );
}