
import Card from "../Card"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useContext } from "react";
import "./style.css"


function CardWrapper(props) {



function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
       <Card
              key={props.id}
              id={props.id}
              name={props.name}
              date={props.date}
              image={props.image}
              url={props.url}
      />
    </motion.div>
  );
}

const items = [0, 1, 2];


  return (
    <div>

<AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
     
    </div>
  );
}

export default CardWrapper