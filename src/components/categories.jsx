import { MenuList, MenuItem} from "@chakra-ui/react";
// import {useContext} from "react";
// import {CategoriesContext}  from "../context/categoeiesContext";
    
function Categories() {
    // const { addCategory } = useContext(CategoriesContext);
  
    // USE IF YOU  HAVE CORRECT CATEGORIES TO SEND
    // const handleItemClick = (itemText) => {
    //     addCategory(itemText);
    // };
    
  return (
    <div>
        <MenuList className="main_container" display={'flex'}>
            <div className="child_container">
                {/* LIKE THIS YOU SEND  */}
                {/* <MenuItem onClick = {()=>{handleItemClick("New: Get Inspired")}}>New: Get Inspired</MenuItem> */}
                <MenuItem>Top 100 Deals</MenuItem>
                <MenuItem>Limited Time Sale: 90</MenuItem>
                <MenuItem>Degree by Reflex</MenuItem>
                <MenuItem>Extra 10% Off Selected EFFY Jewelry</MenuItem>
                <MenuItem>Limited Time Sale: Jewelry & Watches Up to 70% Off</MenuItem>
                <MenuItem>Limited Time Sale: Extra 25% Off Herschel,</MenuItem>
                <MenuItem>Our Top Picks</MenuItem>
                <MenuItem>New from Nordstrom,</MenuItem>
                <MenuItem>New Under $25,</MenuItem>
            </div>

            <div className="child_container">
                <MenuItem>All New Arrivals</MenuItem>
                <MenuItem >Women</MenuItem>
                <MenuItem>Men</MenuItem>
                <MenuItem>Kids</MenuItem>
                <MenuItem>Shoes</MenuItem>
                <MenuItem>Bags & Accessories</MenuItem>
                <MenuItem>Home</MenuItem>
                <MenuItem>Beauty</MenuItem>
                <br />
                <br />
                <br />
                <MenuItem>New in Contemporary</MenuItem>
                <MenuItem>New in Dresses</MenuItem>
                <MenuItem>New in Sandals</MenuItem>
                <MenuItem>New in Sunglasses</MenuItem>
                <MenuItem>New in Swim</MenuItem>
            </div>

            <div className="child_container">
                <MenuItem>New from Our Top Brands</MenuItem>
                <MenuItem>ASTR the Label</MenuItem>
                <MenuItem>New This Season</MenuItem>
                <MenuItem>Birkenstock</MenuItem>
                <MenuItem>DKNY</MenuItem>
                <MenuItem>Free People</MenuItem>
                <MenuItem>Kurt Geiger London</MenuItem>
                <MenuItem>Marc Jacobs</MenuItem>
                <MenuItem>Nike</MenuItem>
                <MenuItem>Rodd & Gunn</MenuItem>
                <MenuItem>TOM FORD</MenuItem>
                <MenuItem>Vince</MenuItem>
                <MenuItem>Diverse Owned or Founded</MenuItem>
            </div>

            <div className="child_container">
                <MenuItem>Denim Edit</MenuItem>
                <MenuItem>Dress Edit</MenuItem>
                <MenuItem>Fathers Day Gifts</MenuItem>
                <MenuItem>Graduation</MenuItem>
                <MenuItem>Outdoor Dining & Entertainment</MenuItem>
                <MenuItem>Prom Shop</MenuItem>
                <MenuItem>Sandal Edit</MenuItem>
                <MenuItem>Space NK Shop</MenuItem>
                <MenuItem>Summer Accessories</MenuItem>
                <MenuItem>Warm Weather Shop</MenuItem>
                <MenuItem>Wedding Shop</MenuItem>
                <MenuItem>Summer Essentials</MenuItem>
            </div>

            <div className="child_container">
                <MenuItem>New This Week</MenuItem>
                <MenuItem>Birkenstock</MenuItem>
                <MenuItem>Marc Jacobs Up to 55% Off</MenuItem>
                <MenuItem>Extra 20% Off Selected 90</MenuItem>
                <MenuItem>Degree by Reflex</MenuItem>
                <MenuItem>TravisMathew Up to 50%</MenuItem>
            </div>
        </MenuList>
    </div>
  )
}

export default Categories;
