import React, { useEffect, useState } from "react";
import Floor from  './Assets/SNOQUALMIE_Floor1.png';

import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
const Floors = () => {
  const [floors, setFloors] = useState([])
  useEffect(() => {
    const fetchFloors = async () => {
      
        const response = await fetch('http://127.0.0.1:9000/api/buildings/snoqualmie');
        
        const data = await response.json();
        setFloors(data.floors || []);
      
    };
    fetchFloors()
  }, []);

  return (
    
      <div>
            {floors.map((floor) => (
                <div key={floor.id}>
                    <img> src = {Floor} alt = "Floor image" </img>
                    <h2>{`Building: ${floor.building}, Floor Level: ${floor.floor_level}`}</h2>
                    <p>Area: {floor.area}</p>
                    <p>Resources: {floor.resources.join(', ')}</p>
                </div>
            ))}
        </div>

  );
};

export default Floors;