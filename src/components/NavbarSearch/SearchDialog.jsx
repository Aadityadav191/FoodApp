import React, { useContext } from 'react'
import './Search.css' ;
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const SearchDialog = () => {

    
    const {showDialog , filteredItems , clearSearch }= useContext(StoreContext);


    if(!showDialog) return null
 
       

    const handleClickitem = (itemId) =>{
        clearSearch();
        setTimeout(() => {
    const el = document.getElementById(item._id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });

      // Optional: highlight
      el.classList.add("highlighted-item");
      setTimeout(() => el.classList.remove("highlighted-item"), 2000);
    }
  }, 100);

    }
  return (
    <div className='search-dialog'>
        {filteredItems.length === 0 ? (
  <p>No item is here in menu.</p>
) : (
  filteredItems.map((item) => (
    <p key={item._id}  onClick={() => handleClickitem(item._id) }  >{item.name}</p>
  ))
)}

        
    </div>
  )
}

export default SearchDialog