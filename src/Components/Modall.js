import React from "react";
import Modal from 'react-modal';
import './css/Button.css';

///MODAL STYLE
const customStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '400px',
    height                : '200px',
    textAlign             : 'center',
    border                : '6px solid #eaec7e',
    background            : '#bedfb2'
    }
    };


Modal.setAppElement('#app')


class Modall extends React.Component {

    render() {
        
        return (
            <Modal
                style={customStyles}
                isOpen={this.props.showModal}
                contentLabel="Minimal Modal Example">

                    <h3 className="break">Have a break ...</h3><br/>
                    <button className="modalBtn1" onClick={this.props.closeModal}>Close Modal</button>
                    <button className="modalBtn2" onClick={this.props.restart}>Restart</button>

            </Modal>

            );
        }
    }

export default Modall