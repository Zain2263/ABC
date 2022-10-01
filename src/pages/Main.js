import React, { useState } from 'react'
import MetaMask from './Metamask';

export default function Main() {
  const [address,setaddress]=useState('');
  const FormSubmit = (e)=>{e.preventDefault();
    const { Company,Product,Price } = e.target;
    console.log(Company.value);
    console.log(Product.value);
    console.log(Price.value); 
  }

  return (
    <div><h1 style={{textAlign: 'center'}}  >Product Information : </h1>
    <a href='home'><button> 
        Home
    </button> </a>
   
    <form onSubmit={FormSubmit}>
    
    Company name :<br></br>
    <input type='text' name= 'Company' /><br></br>
    Product name :<br></br>
    <input type='text' name= 'Product' /><br></br>
    Product Price :<br></br>
    <input type='number' name= 'Price' /><br></br>
    <input type='submit' name= 'Submit' value='SUBMIT'/>
    <h1>Address</h1>
    <MetaMask address={address} setAddress={setaddress}></MetaMask>

   </form>
    </div>
  )
}
