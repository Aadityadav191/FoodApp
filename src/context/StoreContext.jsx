import {  createContext, use, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
//1. Create the Context

export const StoreContext = createContext(null);

//2. Context Provider 

const StoreContextProvider = ({children}) =>{
    
    
    //funtions 
    const[cartItems , setCartItems] = useState({});


    // <<! == addTOCart === !>>
   const addTocart  = (itemId) =>{
     if(!cartItems[itemId]){
         setCartItems((prev) => ({...prev ,[itemId]:1}) )
     } else{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1 }) )
     }

   }

     // <<! == RemoveCart === !>>
       const removeCart = (itemId) =>{
          setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
       }


      
    //  <<! === Subtotal Of item === !>
    
     const subTotalAmount =() =>{
       let totalAmount = 0 ;

       for(const item in cartItems){
          
          if(cartItems[item] > 0){
            let itemInfo = food_list.find((product) => product._id === item );
            if(itemInfo){
                totalAmount += itemInfo.price * cartItems[item];
            }
           
          }
       }
        return totalAmount ;
     }
 

      // For handle Search item 

      const [searchItem , setSearchItem] = useState("");
      const [filteredItems , setFileredItems] = useState([]);
      const [showDialog , setShowDialog] = useState(false)
       
   const handleSearch = (value) => {
  setSearchItem(value);
  console.log("Search Value:", value);

  if (value.trim() === "") {
    setFileredItems([]);
    setShowDialog(false);
    return;
  }

  const results = food_list.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  console.log("Results:", results); // Debug log

  setFileredItems(results);
  setShowDialog(true);
};

        
        
        const clearSearch = () =>{
          setSearchItem("");
          setFileredItems([]);
          setShowDialog(false);
        }
 
    const contextValue = {
     food_list ,
     cartItems,
     setCartItems,
    addTocart,
     removeCart ,
   subTotalAmount ,

   searchItem ,
   filteredItems,
   showDialog,
   handleSearch,
   clearSearch,
    }



    
return (
    <StoreContext.Provider value={ contextValue } >
        {children}
    </StoreContext.Provider>
)
} ;


export default StoreContextProvider ;