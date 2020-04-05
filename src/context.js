import React, { Component} from "react";
import {storeProducts,detailProduct} from "./Component/data.js";

const ProductContext = React.createContext();

class ProductProvider extends Component{
  state={
    productss:[],
    detailProduct:detailProduct,
    cart:[],
    model:false,
    modelp:detailProduct,
    cartSubTotal:0,
    carTax:0,
    cartTotal:0
  };
  componentDidMount(){
    this.setProducts();
  }
  setProducts = () =>{
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts =[...tempProducts,singleItem];

    });
    this.setState(()=>{
      return {productss:tempProducts};
    });
  };
getItem = (id) =>{
  const product =this.state.productss.find(item => item.id === id);
  return product;
};

  handelDetail = (id) =>{
     const product =this.getItem(id);
     this.setState(()=>{
       return {detailProduct:product}
     });
  };
  addtoCart = (id) =>{
    let tempProducts =[...this.state.productss];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart=true;
    product.count=1;
    const price = product.price;
    product.total=price;
    this.setState(()=>{
      return {productss:tempProducts,cart:[...this.state.cart,product]};
    },()=>{
      this.addTotals();
    });
  };
openm =id =>{
  const product =this.getItem(id);
  this.setState(()=>{
    return {modelp:product,model:true};
  });
}
closem = ()=>{
  this.setState(()=>{
    return {model:false};
  });
};
increment =(id) =>{
let tempCart = [...this.state.cart];
const selectedP = tempCart.find(item=>item.id === id);

const index = tempCart.indexOf(selectedP);
const product = tempCart[index];

product.count = product.count +1;
product.total = product.price * product.count;
this.setState(()=>{
  return{cart:[...tempCart]}
},()=>{this.addTotals();})

}
decrement=(id)=>{
  let tempCart = [...this.state.cart];
  const selectedP = tempCart.find(item=>item.id === id);

  const index = tempCart.indexOf(selectedP);
  const product = tempCart[index];

  product.count = product.count - 1;
  if(product.count === 0){
    this.removeItem(id);
  }else{
  product.total = product.price * product.count;
  this.setState(()=>{
    return{cart:[...tempCart]}
  },()=>{this.addTotals();})
}
}
removeItem=(id)=>{
  let tempProducts = [...this.state.productss];
  let tempCart = [...this.state.cart];
  tempCart = tempCart.filter(item => item.id !== id);

const index = tempProducts.indexOf(this.getItem(id))
let removedProduct = tempProducts[index];
removedProduct.inCart=false;
removedProduct.count=0;
removedProduct.total=0;

this.setState(()=>{
  return{
    cart:[...tempCart],
    productss:[...tempProducts]
  }
},()=>{
  this.addTotals();
})
}
clearCart=()=>{
this.setState(()=>{
  return {cart:[]};
},()=>{
  this.setProducts();
  this.addTotals();
});
};

addTotals=()=>{
  let subTotal = 0;
  this.state.cart.map(item=>{
    (subTotal += item.total)
  });
  const tempTax = subTotal * 0.1;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
  this.setState(()=>{
    return{
      cartSubTotal:subTotal,
      carTax:tax,
      cartTotal:total
    }
  })
}
  render(){
    return(
      <ProductContext.Provider value={
        {
          ...this.state,
          handelDetail:this.handelDetail,
          addtoCart:this.addtoCart,
          openm:this.openm,
          closem:this.closem,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart
        }
      }>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
