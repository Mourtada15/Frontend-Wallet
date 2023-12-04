import React from 'react'
import logo from "../assets/logo.png"

const sidebar = () => {
  return (
    <div>
      

      <div class="container-fluid height-100">
    <div class="row">

      <div class="col-md-9 order-md-2">
        <h1>Main Content</h1>
      </div>

      <div class="col-md-3 order-md-1 bg-dark">
        <img src={logo} alt="Logo" class="img-fluid mb-4"/>
        <a href="#" class="text-white d-block">Home</a>
        <a href="#" class="text-white d-block">Transfer</a>
        <a href="#" class="text-white d-block">Users</a>
        <a href="#" class="text-white d-block">Transactions</a>
        <a href="#" class="text-white d-block">Promotions</a>
      </div>

    </div>
  </div>
    </div>
  )
}

export default sidebar
