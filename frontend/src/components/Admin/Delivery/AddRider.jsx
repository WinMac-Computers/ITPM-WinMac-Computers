import axios from 'axios';
import React, { Component } from 'react'
import { useForm } from 'antd/lib/form/Form';
import 'react-toastify/dist/ReactToastify.css';
import "./delivery.css";
import { toast } from 'react-toastify';



export default class AddRider extends Component {

  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      name: '',
      phone: '',
      email: '',
      nic: ''
    }
  }
  
  onChangeName(e){
    this.setState({
      name: e.target.value
    });
  }
    
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeNic(e) {
    this.setState({
      nic: e.target.value
    })
  }

  onSubmit(e){
   e.preventDefault();
   const obj = {
      name : this.state.name,
      phone : this.state.phone,
      email : this.state.email,
      nic : this.state.phone
   };
   axios.post("http://localhost:8070/delivery/addrider", obj).then( res => console.log(res.data));
   
   this.setState({
     name: '',
     phone: '',
     email: '',
     nic: ''
     
   })
  }

  render() {
    return (
      
      <div >
        
        <h3 style={{fontSize: "30px", textAlign: "center", textDecoration: "bold", marginTop: "10px"}}>Add New Rider</h3>

        <form onSubmit={this.onSubmit} >
         <div>
         <div className='' >
            <label htmlFor="">Add Rider Name :</label>
            <input type="text" className='form-control' 
              placeholder='Jhone '
              value={this.state.name}
              onChange={this.onChangeName}
              required
            />
            <p>Rider name is requird</p>
          </div>
          <div className='form-group'>
            <label htmlFor="">Add Rider Phone :</label>
            <input type="text" className='form-control' 
            placeholder='0771245785'
            value={this.state.phone}
            onChange={this.onChangePhone}
            required minLength={10}
            />
            <p>Rider Phone is requird</p>
          </div>
          <div className='form-group'>
            <label htmlFor="">Add Rider Email :</label>
            <input type="email" className='form-control' 
            placeholder='abc@gmail.com'
            value={this.state.email}
            onChange={this.onChangeEmail}
            required
            />
            <p>Email is requird</p>
          </div>
          <div className='form-group'>
            <label htmlFor="" >Add Rider NIC :</label>
            <input type="text" className='form-control' 
            placeholder='998547854v'
            value={this.state.nic}
            onChange={this.onChangeNic}
            required
            />
            <p>NIC is requird</p>
          </div>
          <div className='form-group'>
            <input type="submit" value= "Add Rider" className='btn btn-primary' 
            onClick={this.notify}
            />

            
          </div>

          </div> 
          
        </form>
        
    
      
      </div>
    )
  }

  notify(){
    toast( 'Basic notification', {position: toast.POSITION.TOP_CENTER} );
  }
}
