import  { useEffect , useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import { getTransaction } from '../app/userTransactions';

const TransactionTable = () => {


    const dispatch = useDispatch()
    const transactions = useSelector(state => state.transactions.transactions)
    console.log( useSelector(state => state.transactions.transactions)
    )

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response = await axios.get('http://localhost:8000/transaction/allTransaction');
                dispatch(getTransaction(response.data));
                return response.data
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    
    },[])




  return (
    <div>
    <Table striped bordered hover size="sm">
     <thead>
       <tr>
         
         <th>ID</th>
         <th>Sender Id</th>
         <th>Reciver Id</th>
         <th>Date</th>
         <th>Amount Type </th>
         <th>Amount</th>
         <th>Promotion Id</th>
         <th>Action</th>
         
       </tr>
     </thead>
     <tbody>
     {transactions.map(transaction =>{
            return(
            <tr>
            <td>{transaction.id}</td>
            <td>{transaction.sender_id}</td>
            <td>{transaction.receiver_id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.amountType}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.promotion_id}</td>
            {console.log("amount is : ",transaction.amount)}
         
        
            <td>
            {/* id: transaction.id, 
                        sender_id: transaction.sender_id,
                        receiver_id: transaction.receiver_id,
                        date: transaction.date,
                        amountType: transaction.amountType,
                        promotion_id: transaction.promotion_id, */}



               <button className='btn btn-sm btn-danger'>Delete</button>
               <button className='btn btn-sm btn-success'>Update</button>

            </td>

          </tr>)
     })}
 
     </tbody>
   </Table>
   </div>
  )
}

export default TransactionTable
