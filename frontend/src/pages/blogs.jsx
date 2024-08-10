import React from 'react';
import { Box, Heading, Text, SimpleGrid, Link, useBreakpointValue, Icon, Image, VStack } from '@chakra-ui/react';
import { FaBook, FaRegLightbulb, FaShieldAlt, FaToolbox } from 'react-icons/fa';
import './styles/blogs.css';

const dummyBlogs = [
  {
    id: 1,
    title: 'Preparing for Natural Disasters',
    summary: 'Learn how to prepare your home and family for various types of natural disasters.',
    url: 'https://example.com/blog/preparing-for-natural-disasters',
    imageUrl: 'https://via.placeholder.com/300', // Add actual image URL
    date: '2024-08-01',
  },
  {
    id: 2,
    title: 'Understanding Earthquakes',
    summary: 'An in-depth guide to understanding earthquakes, their causes, and how to stay safe.',
    url: 'https://example.com/blog/understanding-earthquakes',
    imageUrl: 'https://via.placeholder.com/300', // Add actual image URL
    date: '2024-08-02',
  },
  {
    id: 3,
    title: 'Effective Disaster Response Strategies',
    summary: 'Strategies and tips for effective disaster response and recovery.',
    url: 'https://example.com/blog/effective-disaster-response-strategies',
    imageUrl: 'https://via.placeholder.com/300', // Add actual image URL
    date: '2024-08-03',
  },
  {
    id: 4,
    title: 'How to Build an Emergency Kit',
    summary: 'Step-by-step guide on building a comprehensive emergency kit for various scenarios.',
    url: 'https://example.com/blog/how-to-build-an-emergency-kit',
    imageUrl: 'https://via.placeholder.com/300', // Add actual image URL
    date: '2024-08-04',
  }
];

const Blogs = () => {
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box p={5} bgGradient="linear(to-br, #e3f2fd, #ffffff)" minHeight="100vh">
      <Heading mb={8} color="blue.800" textAlign="center" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>Latest Blogs</Heading>
      <Text mb={8} color="gray.700" textAlign="center" fontSize={{ base: 'md', md: 'lg' }}>Stay informed with our latest articles on disaster preparedness and safety.</Text>

      <SimpleGrid columns={gridColumns} spacing={10}>
        {dummyBlogs.map((blog) => (
          <Box
            key={blog.id}
            p={6}
            borderRadius="lg"
            bg="white"
            boxShadow="lg"
            position="relative"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            alignItems="center"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
          >
            <VStack spacing={3} align="start">
              <Text fontSize="sm" color="gray.500">{blog.date}</Text>
              <Heading size="md" color="blue.700">{blog.title}</Heading>
              <Text color="gray.600">{blog.summary}</Text>
              <Link href={blog.url} color="teal.500" fontWeight="bold" isExternal>Read more</Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Blogs;
