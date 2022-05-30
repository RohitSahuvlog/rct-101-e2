import React, { useState } from "react";

const AddProduct = ({postData}) => {

  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const Modal = () => <div />;
  const ModalBody = () => <div />;
  const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;

const [inp,setinp]=useState({})
const handleform=()=>{
  // e.preventDefalut()
  // let res = await fetch ("http://localhost:8080/products",{
  //   method:"POST",
  //   header:{"context-type":"application/json"},
  //   body:JSON.stringify(inp)
      
  //   } )
  //   let data =await res.json()
postData([...setinp])

}
const handlechang=(e)=>{
var nameval =e.target.value
if(e.target.type==="checkbox"){
setinp({
  ...inp,
  [nameval]:e.target.checked
})
}
else{
  setinp({
    ...inp,
    [nameval]:e.target.value
  })
}
}
  return (
    <>
      <Button my={4} data-cy="add-product-button"> AddProduct</Button>
      <Modal >
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" type="text" onChange={handlechang} name="textt"/>
          <Select data-cy="add-product-category" name="" onClick={handlechang}>
            <option data-cy="add-product-category-shirt" >shirt</option>
            <option data-cy="add-product-category-pant" >pant</option>
            <option data-cy="add-product-category-jeans" >jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" onClick={handlechang}>
            <Radio data-cy="add-product-gender-male" >male</Radio>
            <Radio data-cy="add-product-gender-female" >female</Radio>
            <Radio data-cy="add-product-gender-unisex" >unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" onChange={handlechang} name="price" />
          <Button data-cy="add-product-submit-button" onClick={handleform} >Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
