import React from "react";
import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
export default function Registration() {
  return (
    <>
      <Header />
     <div className='mt-5'>
      <h1 style={{marginLeft: '90px',color: '#273384'}} className='mb-5 text-start'>Welcome to PAYPLEX - Your Gateway to Secure Financial Management.</h1>
<h3 style={{marginLeft: '90px', color: '#809BAA'}} className='mb-5 text-start'>Create your account today and unlock a world of personalized experiences! Please fill in the following information to get started.</h3>
</div>
      <Form />
    </>
  );
}

