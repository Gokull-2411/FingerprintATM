import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Button} from "reactstrap"
import {useSelector,useDispatch} from "react-redux"
import {selectBalance,incrementByAmount,decrementByAmount} from "./../store/amountSlice"
import Swal from "sweetalert2"
const   Actions  = () =>{
    const dispatch = useDispatch();
  const balance = useSelector(selectBalance)  
  const showFingerPrint = (idx)=>{
    const imgURL = "https://i.pinimg.com/originals/f3/31/88/f331880657aad6b34a821d0c7c357c0d.jpg"
    Swal.fire({
        title: '<strong>Scan Fingerprint</strong>',
        icon: '<i className="nc-icon nc-tap-01 text-warning"></i>',
        html:`<div><img src="${imgURL}" height="60px" width="100px" alt=""/></div`
    }).then((result)=>{ 
        if(result.isConfirmed){
            if(idx===3)
            Swal.fire(
                'Balance',
                'Rs.'+balance,
                'success'
              )
            if(idx===2 || idx===1){
                const showInputModal = async()=>{
                    const {value:amount} = await Swal.fire({
                        title: 'Enter amounts',
                        input: 'number',
                        inputLabel: `Amount to ${idx===2 ? "Withdraw" : "Deposit"}`,
                        inputPlaceholder: 'Enter amount',
                        inputValue: 100,
                        inputAttributes:{step:100,min:1,max:idx===2 ? balance: 25000},
                        inputValidator: (value) => {
                            if (!value) {
                              return 'You need to choose something!'
                            }
                            if(value<1){
                                return "Min amount 100 required"
                            }
                            if(value%100!=0)
                             return "Enter multiples of 100"
                             if(idx===2 && value>balance)
                             return "Insufficient balance"
                          }
                    })
                    // Credit 
                    if(idx===1){
                            dispatch(incrementByAmount(+amount));
                    }else{
                     
                        dispatch(decrementByAmount(+amount))
                    }
                }
                showInputModal().then(()=>{
                    Swal.fire({icon: 'success',
                    title: `Your amount has been ${idx===2 ? "debited Wait for cash" : "credited"} `,
                    showConfirmButton: false,
                    timer: 2500})
                })
          
             /*   Swal.fire({
                    title: `<strong>${idx===2 ? "Withdraw" : "Deposit"}</strong>`,
              icon: '<i className="nc-icon nc-tap-01 text-warning"></i>',
              html:`<div><input type="number" step="100"/></div`
                }).then(res=>{
                    if(res.isConfirmed){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Your amount has been ${idx===2 ? "debited Wait for cash" : "credited"} `,
                            
                            showConfirmButton: false,
                            timer: 2500
                          })
                    }
                })*/
            }
        }
    })
  }

  return <>
  <Container fluid>
    <Row>
        
        <Col sm="12" md="4" style={{display:"flex"}}>
            <Button  color="primary" style={{margin:"auto"}} onClick={()=>showFingerPrint(1)}> Deposit</Button>
          
        </Col>
        
        <Col sm="12" md="4" style={{display:"flex"}}>
          <Button color="primary" style={{margin:"auto"}} onClick={()=>showFingerPrint(2)}>Withdraw</Button>
        </Col>
        
        <Col sm="12" md="4" style={{display:"flex"}}>
          <Button color="primary" style={{margin:"auto"}} onClick={()=>showFingerPrint(3)}>Balance</Button>
        </Col>
    </Row>
  </Container>
  </>
}
export default Actions