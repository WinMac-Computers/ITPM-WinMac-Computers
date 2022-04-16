import axios from 'axios';
import React, { Component } from 'react'

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
      <div>
        <h3 style={{}}>Add New Rider</h3>

        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor="">Add Rider Name</label>
            <input type="text" className='form-control' 
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="">Add Rider Phone</label>
            <input type="text" className='form-control' 
            value={this.state.phone}
            onChange={this.onChangePhone}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="">Add Rider Email</label>
            <input type="email" className='form-control' 
            value={this.state.email}
            onChange={this.onChangeEmail}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="">Add Rider NIC</label>
            <input type="text" className='form-control' 
            value={this.state.nic}
            onChange={this.onChangeNic}
            />
          </div>
          <div className='form-group'>
            <input type="submit" value= "Add Rider" className='btn btn-primary' />
          </div>

        </form>

     
        
      </div>
    )
  }
}
