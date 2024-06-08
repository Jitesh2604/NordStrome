import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Flex, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Categories from "./categories";
import logo from "../assets/logo.png";


const links = [
    { to: "/New", label: "New" },
    { to: "/Clearance", label: "Clearance" },
    { to: "/Women", label: "Women" },
    { to: "/Men", label: "Men" },
    { to: "/Kids", label: "Kids" },
    { to: "/Shoes", label: "Shoes" },
    { to: "/Bags&Accessories", label: "Bags&Accessories" },
    { to: "/Home", label: "Home" },
    { to: "/Beauty", label: "Beauty" },
    { to: "/Gift_Guide", label: "Gift Guide" },
    { to: "/Flash_Events", label: "Flash Events" },
];

const Navbar = () => {
    
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);
    };

    return (
        <nav id="nav">
            <div id="msg">
                <p>Free shipping on most orders over $89. Shop online or pick up select orders at a Nordstrom Rack or Nordstrom store. Learn <Button variant="link" as="a" href="https://www.nordstromrack.com/ship-return-policy">More</Button></p>
            </div>

            <div id='text'>
                <div className="text-child">
                    <img src={logo} alt="logo" />
                </div>

                <div className="text-child">
                <input
                    type="text"
                    placeholder="Search for products or brands"
                    name="item"
                    id="input"
                    aria-label="Search for products or brands"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
                </div>

                <div className="text-child">
                    <Menu>
                        <MenuButton bg='white' as={Button} rightIcon={<ChevronDownIcon />} >
                            SignIn
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                            <ChakraLink as={ReactRouterLink} to="/SignIn" bg="lightblue" border="1px"  m={2} width={"100%"} marginBottom={"20px"} textAlign={"center"}>
                                SignIn
                            </ChakraLink>
                            </MenuItem>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <ChakraLink as={ReactRouterLink} to = "/LocationPage" marginTop={"10px"}>
                        <p><span><i className="fa-solid fa-store"></i></span> Stores </p>
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to = "/AddToCart" marginTop={"10px"}>
                        <p> <span><i className="fa-solid fa-cube"></i></span> Purchases</p>
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to = "/BuyProductPage" marginTop={"10px"}>
                    <p><i><i className="fa-solid fa-bag-shopping"></i></i></p>
                    </ChakraLink>
                </div>
            </div>
            <hr />
            <Flex
                align="center"
                justify="space-around"
                padding={4}
            >
                {links?.map((link) => (
                    <ChakraLink
                        as={ReactRouterLink}
                        key={link.to}
                        to={link.to}
                        color="gray.900"
                    >
                        <Menu>
                            <MenuButton bg='white' as={Button} cursor="pointer">
                                {link.label}
                            </MenuButton>
                            <Categories/>
                        </Menu>
                    </ChakraLink>
                ))}
            </Flex>
        </nav>
    );
};

export default Navbar;
