import React, { useState } from 'react';

// const [validateName,setValidateName] = useState(false); 

 const validateName = (name , fn) => {

    console.log(name);

    if(name.trim()===""){
        fn('there is an error in name');
        return;
 }
   return fn('');

};

const validateAddress = (addrs, fn) => {
    if(addrs.trim()===""){
        fn('there is an error in address');
        return;
 }
   return fn('');
};

const validateMobile = () => {

};

const validateCity = () => {

};

const validateStates = () => {

};

const validateZip = () => {

};


export {validateName , validateAddress , validateMobile,  validateCity , validateStates , validateZip} ; 

