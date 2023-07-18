import './destinationCard.css'
import { ImLocation } from 'react-icons/im';
// import "./packageItem.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import { useDisclosure } from '@chakra-ui/react';
import PackageItem from './packageItem';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'


function DestinationCard(props){
    
        const { isOpen, onOpen, onClose } = useDisclosure()
        
    return(
        <>
        <div className="destination-card">

            <div className="card">
                <img src={props.poster} alt="" className='card-img'/>
                <div className="top-right">🗺️ {props.location}</div>
                <div className='card-body'>
                    <h2 style={{fontStyle:"italic", textDecoration: "underline"}}>{props.location} </h2>
                    <h3>Explore the best of {props.location}</h3>
                    <p className="card-info">{props.saying}</p>
                    
                    <div className="card-footer">
                    <Button onClick={props.onclick}>Explore Packages</Button>
  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      </ModalBody>
<PackageItem></PackageItem>
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant='ghost'>Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
        
                        
                    </div>
                </div>
            </div>
        </div>
</>
    )
}


export default DestinationCard;