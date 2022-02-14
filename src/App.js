import React, { Component } from 'react';
import './App.css';
import Modal from "./component/Modal";

import  {validateName , validateAddress , validateMobile,  validateCity , validateStates , validateZip} from './validation';



class Home extends Component {
  state = {

    checked: "",
    show: false,
    
    show_personal: true,
    name: "",
    mobile: "",
    addrs: "",
    city: "",
    states:  "",
    type: "",
    zip: "",
    name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_errror: "",
    states_error: "",
    zip_error: "",

    personal: [
       {
         name: "sample",
         mobile:"1234567890",
         addrs:"a a a",
         city:"Chennai",
         states:"Tamil Nadu",
         zip:"123456",
         type:"Present",

       }
    ],

    business: [
      {
        name: "cool",
        mobile:"1234567890",
        addrss:"a a a",
        city:"Chennai",
        states:"Tamil Nadu",
        zip:"123456",
        type:"Present",
      }
    ],
  };



componentDidMount = () => {
  this.handleBorder();
};

onClose = () => {
  // this.setState({show:false})

  this.setState({
    checked: "",
    show: false,
    
    show_personal: true,
    name: "",
    mobile: "",
    addrs: "",
    city: "",
    states:  "",
    type: "",
    zip: "",
    name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_errror: "",
    states_error: "",
    zip_error: ""
  })

};

handleChange = (e) => {
  if(e.target.name==="name"){
    this.setState({name:e.target.value});
    
  }
  if(e.target.name==="mobileno"){
    this.setState({mobile:e.target.value});
    
  }
  if(e.target.name==="address"){
    this.setState({addrs:e.target.value});
    
  }
  if(e.target.name==="city"){
    this.setState({city:e.target.value});
    
  }
  if(e.target.name==="state"){
    this.setState({states:e.target.value});
    
  }
  if(e.target.name==="zip"){
    this.setState({zip:e.target.value});
  }
   if(e.target.name==="info" && e.target.value==="personal" ){
    this.setState({checked:e.target.value})
    console.log(e.target.checked);

  }
  if(e.target.name==="info" && e.target.value==="business"){

    this.setState({checked:e.target.value})
   
  }
  

  if(e.target.name==="addinfo" && e.target.value==="present"){
    this.setState({type:e.target.value});
    console.log(this.state.type);
    
  }
  if(e.target.name==="addinfo" && e.target.value==="permanent"){
    this.setState({type:e.target.value});
    console.log(this.state.type);
  }

  if(e.target.name==="addinfo" && e.target.value==="both"){
    this.setState({type:e.target.value});
    console.log(this.state.type);
    
  }


};

handleSave = (e) => {
  e.preventDefault();
  
  if (this.state.checked === "personal") {
    this.setState((prev) => ({
      personal: [
        ...prev.personal,
        {
          id:Math.random().toString(),

          name: this.state.name,
          mobile: this.state.mobile,
          addrs: this.state.addrs,
          city: this.state.city,
          states: this.state.states,
          zip: this.state.zip,
          type: this.state.type,
        },
      ],
    }));
  } else if (this.state.checked === "business") {
    this.setState((prev) => ({
      business: [
        ...prev.business,
        {
          id:Math.random().toString(),
          
          name: this.state.name,
          mobile: this.state.mobile,
          addrs: this.state.addrs,
          city: this.state.city,
          states: this.state.states,
          zip: this.state.zip,
          type: this.state.type,
        },
      ],
    }));
  }

  
  

};



  

handleClear = () => {

  this.setState({
    checked: "",
    show: true,
    
    show_personal: true,
    name: "",
    mobile: "",
    addrs: "",
    city: "",
    states:  "",
    type: "",
    zip: "",
    name_error: "",
    mobile_error: "",
    addrs_error: "",
    city_errror: "",
    states_error: "",
    zip_error: ""
  })

};

 handleBorder = () => {
  this.setState({
    borderBottom1: "hidden",
    borderBottom: "3px solid rgb(71,68,206)",
    show_personal: true,
  });
};


 handleBorder1 = () => {
  this.setState({
    borderBottom1: "hidden",
    borderBottom: "3px solid rgb(71,68,206)",
    show_personal: false,
  });
};

showModal = () => {
  this.setState({show:true})
 
};


// validation starts here

errorHandler = (e) => {
  if(e.target.name==="name"){
    validateName(e.target.value, this.changeErrorHandler);
  }
  if(e.target.name==="mobile"){
    validateMobile(e.target.value, this.changeErrorHandler);
  }
  if(e.target.name==="address"){
    validateAddress(e.target.value, this.changeAddrsErrorHandler);
  }
  if(e.target.name==="city"){
    validateCity(e.target.value, this.changeErrorHandler);
  }
  if(e.target.name==="states"){
    validateStates(e.target.value, this.changeErrorHandler);
  }
  if(e.target.name==="zip"){
    validateZip(e.target.value, this.changeErrorHandler);
  }
  // if(e.target.name==="type"){
  //   validateNameHandler(e.target.value, this.changeErrorHandler);
  // }

}


changeErrorHandler = (value) => {

  this.setState({name_error : value})
}

// nameErrorHandler = (e) => {
//   validateNameHandler(e.target.value, this.changeErrorHandler);
// };



changeAddrsErrorHandler = (value) => {
  this.setState({addrs_error : value})
  }

// addrsErrorHandler = (e) => {
//   validateAddress(e.target.value , this.changeAddrsErrorHandler); 
// }





render() {
  console.log('[App.js] render');
  let persons = null;

  let form =(<form onSubmit={this.handleSave}>

   




    <label for="name"> Name</label><br />
    {this.state.name_error !== "" && <p>name should not be empty</p>}
    <input type="text" id="name" name="name" onChange={this.handleChange} onSelect={this.errorHandler} value={this.state.name}/><br />

    <label for="mobileno">Mobile No</label><br/>
   
    <input type="text" id="mobileno" name="mobileno" onChange={this.handleChange} /> <br/>

    <label for="address">Address</label><br />
    {this.state.addrs_error !== "" && <p>{this.state.addrs_error}</p>}
    <input type="text" id="address" name="address" onChange={this.handleChange} onSelect={this.errorHandler}/><br />

    <label for="city">City</label><br />
    <input type="text" id="city" name="city" onChange={this.handleChange}/><br />

    <label for="state">State</label><br />
    <input type="text" id="state" name="state" onChange={this.handleChange}/><br />

    <label for="zip">Postal Code/ Zip Code</label><br />
    <input type="text" id="zip" name="zip" onChange={this.handleChange}/><br />

  <div onChange={this.handleChange}>

    <input className='radios' type="radio" id="present" name="addinfo" value="present"  />
    <label for="present">Present</label>

    <input className='radios' type="radio" id="permanent" name="addinfo" value="permanent"  />
    <label for="permanent">Permanent</label>

    <input className='radios' type="radio" id="both" name="addinfo" value="both" />
    <label for="both">Both</label> 

  </div>
    <button className="clear" onClick={this.handleClear}>Clear</button>
    <button className="save" type="submit" >Save</button>
  



</form>
)

   
   persons = (
     <div>
     

      <table>
        <thead>
        <tr>
          <th>name</th>
          <th>Mobile</th>
          <th>addrss</th>
          <th>city</th>
          <th>states</th>
          <th>zip</th>
          <th>type</th>

        </tr>
        </thead>
        <tbody>
        { this.state.show_personal ? this.state.personal.map(data => (

            <tr>
                  <td>{data.name}</td>
                  <td>{data.mobile}</td>
                  <td>{data.addrss}</td>
                  <td>{data.city}</td>
                  <td>{data.states}</td>
                  <td>{data.zip}</td>
                  <td>{data.type}</td>
             </tr>
             
          )) : this.state.business.map(data => (

              <tr>
                <td>{data.name}</td>
                <td>{data.mobile}</td>
                <td>{data.addrss}</td>
                <td>{data.city}</td>
                <td>{data.states}</td>
                <td>{data.zip}</td>
                <td>{data.type}</td>
              </tr>

          ))

        }
       
        </tbody>

        </table>
      </div>
    );

   
        

        

       
        
        
     
  


    return (
      <div >
           <div className='App-header'>  </div>
       
             <div><button className='buttons'  onClick={()=> {this.setState({show_personal:false})}} > Business</button> <button className='buttons' onClick={()=> {this.setState({show_personal:true})}}>Personal</button></div> 
             <button className='add' onClick={this.showModal} >ADD </button>

          


        {persons}

        {this.state.show ? <Modal close={this.onClose}>

          

                <h2>Fill Address Details</h2> <button className="close" onClick={this.onClose} >X</button>
          <input className='radios' type="radio" id="personal" name="info" checked={this.state.checked ==="personal"} value="personal" onChange={this.handleChange}/>
          <label for="personal">Personal</label>
          
          <input className='radios' type="radio" id="business" name="info" checked={this.state.checked ==="business"} value="business" onChange={this.handleChange} />
          <label for="business">business</label><br></br>


         {this.state.checked && form}
        </Modal> : ""}
      </div>
      
    );
  };


};
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));





export default Home;
