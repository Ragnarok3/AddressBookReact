import React , { Component } from 'react';

class Modal extends Component {

    render(props){
        return (
            <div  >
                <div className='bg' onClick={this.props.close} />
                 <div className="pop">
                    {this.props.children}
                </div>
                
            </div>
           


        )
        
    }
}

export default Modal;