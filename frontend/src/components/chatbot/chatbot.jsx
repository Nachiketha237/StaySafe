// src/components/ChatDrawer.js

import React, { useState } from 'react';
import {
    Box, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader,
    DrawerOverlay, DrawerContent, DrawerCloseButton, VStack,
    HStack, Input, Flex, Avatar, Text, useDisclosure
} from '@chakra-ui/react';
import { FaRobot } from 'react-icons/fa';

const ChatDrawer = ({ isOpen, onOpen, onClose }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        // Handle sending message
        setMessage("");
    };

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen} position="fixed" bottom={5} right={5} borderRadius="full" size="lg">
                <FaRobot size={32} />
            </Button>

            <Drawer isOpen={isOpen} onClose={onClose} size="sm">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Help Center Chat</DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={4} align="stretch" height="full">
                            {/* Dummy Chat Messages */}
                            <Flex align="center">
                                <Avatar name="User" src="https://bit.ly/broken-link" size="sm" mr={3} />
                                <Box bg="teal.100" p={4} borderRadius="lg" position="relative">
                                    <Text><strong>User:</strong> Hello, I need help with evacuation.</Text>
                                    <Text fontSize="xs" color="gray.500" mt={1} position="absolute" right={2} bottom={1}>10:00 AM</Text>
                                </Box>
                            </Flex>

                            <Flex align="center" justify="flex-end">
                                <Box bg="gray.100" p={4} borderRadius="lg" position="relative">
                                    <Text><strong>Admin:</strong> We're here to help! Please stay calm, we're locating the nearest shelter for you.</Text>
                                    <Text fontSize="xs" color="gray.500" mt={1} position="absolute" right={2} bottom={1}>10:02 AM</Text>
                                </Box>
                                <Avatar name="Admin" src="https://bit.ly/broken-link" size="sm" ml={3} />
                            </Flex>
                            {/* End of Dummy Messages */}
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <HStack spacing={2} width="full">
                            <Input
                                placeholder="Type your message here..."
                                bg="gray.100"
                                borderRadius="full"
                                flex="1"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                _focus={{ bg: "white", boxShadow: "outline" }}
                            />
                            <Button colorScheme="teal" borderRadius="full" onClick={handleSendMessage}>
                                Send
                            </Button>
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default ChatDrawer;
