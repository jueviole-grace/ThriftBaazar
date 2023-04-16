// import '../Styles/productCard.css';
import { GridItem, Divider, Image } from "@chakra-ui/react"
import { motion } from "framer-motion";

const ProductCard = ({
    id,
    name, 
    price, 
    description,
    imgUrls, 
    user,
    onClick
}) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <GridItem
      as={motion.li}
      variants={item}
      w={"100%"}
      h="400"
      bg={"button"}
      p={4}
      borderRadius={8}
      cursor="pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3P4qDCx-svWdblH1p3ptnYVkQ9-sUXinrLDiKpLN&s"} className="productCardImg" alt="product-img" mb={4} w={400} bgPosition={'center'}/>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider mb={4}/>
      <div className="productCardPrice">₹ {price}</div>
      <div className="productCardName">{name}</div>
      <div className="productCardDesc">{description}</div>
      <div className="productCardUser">Posted by {user}</div>
    </GridItem>
    // <div className='productCard'>
    //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3P4qDCx-svWdblH1p3ptnYVkQ9-sUXinrLDiKpLN&s" className="productCardImg" alt="product-img" />
    //     <div className="productCardPrice">₹ {price}</div>
    //     <div className="productCardName">{name}</div>
    //     <div className="productCardDesc">{description}</div>
    //     <div className="productCardUser">Posted by {user}</div>
    // </div>
  )
}

export default ProductCard