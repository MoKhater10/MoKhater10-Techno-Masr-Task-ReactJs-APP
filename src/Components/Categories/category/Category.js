import React from 'react';
import { useParams } from 'react-router-dom';
import './category.css'
import { data } from '../../../Data/data';


function Category() {

    const { categoryId } = useParams(); 
    const dataCategory = data[categoryId];
    console.log(dataCategory);

    let cartItems = [];
    const handleClick = (product) => {
        let divItems = document.querySelector('.cart-items');
        let divItem = document.createElement("div");
        divItem.className = "cart-content";
        divItem.setAttribute('id', product.id);
        divItem.setAttribute('src', product.src);
        divItems.appendChild(divItem);

        let imgItem = document.createElement("img");
        imgItem.className = "img-cart";
        imgItem.src = product.src;
        divItem.appendChild(imgItem);

        let spanItem = document.createElement("span");
        let spanItemContent = document.createTextNode('' + product.title);
        spanItem.appendChild(spanItemContent);
        divItem.appendChild(spanItem);

        let spanPrice = document.createElement("span");
        let spanPriceContent = document.createTextNode('' + product.price);
        spanPrice.appendChild(spanPriceContent);
        divItem.appendChild(spanPrice);
        cartItems.push(divItem);
    }
    
    
    const remove = (productID) => {
        const p = document.getElementById(productID);
        if (p){
            p.remove();
        }
    }
    return (

        <div className="articles" id="articles">
            <div className="sec">
                {dataCategory && dataCategory.map((product,index) => {
                    return (
                        <div className="box" key={index}>
                            <div className='wrapper_img'>
                                <img className="img" src={product.src} alt="" />
                            </div>
                            <div className="content" >
                                <h3 className="title">{product.title}</h3>
                                <h3 className="price">{product.price}</h3>
                            </div>
                            <div className="info">
                                <button className="cart-btn" onClick={ () => handleClick(product)}> Add Cart</button>
                                <button className="view"  onClick={()=> remove (product.id)}>Remove </button>  
                            </div>
                        </div>
                    )
                })}
             </div>
        </div>
  );
}
export default Category;