import React, { useEffect, useState } from 'react';
import api from '../services/api'
import { Box, Heading, Text, SimpleGrid, Link, useBreakpointValue, Button, Input, Textarea, VStack } from '@chakra-ui/react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({ title: '', content: '', url: '', date: '' });
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await api.get(`/blogs/`);
      console.log(response.data); // Verify the data
      // Check if the response is an array
      if (Array.isArray(response.data)) {
        setBlogs(response.data);
      } else {
        console.error('Expected an array of blogs');
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleCreate = async () => {
    try {
      await api.post(`/blogs/`, formData);
      fetchBlogs();
      setFormData({ title: '', content: '', url: '', date: '' });
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/blogs/${editingBlog.id}/`, formData);
      fetchBlogs();
      setEditingBlog(null);
      setFormData({ title: '', summary: '', url: '', date: '' });
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/blogs/${id}/`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box p={5} bgGradient="linear(to-br, #e3f2fd, #ffffff)" minHeight="100vh">
      <Heading mb={8} color="blue.800" textAlign="center" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
        Latest Blogs
      </Heading>
      <Text mb={8} color="gray.700" textAlign="center" fontSize={{ base: 'md', md: 'lg' }}>
        Stay informed with our latest articles on disaster preparedness and safety.
      </Text>

      <SimpleGrid columns={gridColumns} spacing={10}>
        {Array.isArray(blogs) && blogs.map((blog) => (
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
              <Button onClick={() => { setEditingBlog(blog); setFormData(blog); }}>Edit</Button>
              <Button onClick={() => handleDelete(blog.id)} colorScheme="red">Delete</Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      {editingBlog || (
        <Box mt={10} p={6} bg="white" borderRadius="md" boxShadow="md" maxWidth="600px" mx="auto">
          <Heading mb={4} color="blue.800" textAlign="center" fontSize="xl">Create Blog</Heading>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Title" name="title" value={formData.title} onChange={handleChange} />
            <Textarea placeholder="Content" name="content" value={formData.summary} onChange={handleChange} />
            <Input placeholder="URL" name="url" value={formData.url} onChange={handleChange} />
            <Input placeholder="Date" type="date" name="date" value={formData.date} onChange={handleChange} />
            <Button onClick={editingBlog ? handleUpdate : handleCreate} colorScheme="teal">
              {editingBlog ? 'Update' : 'Create'}
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Blogs;
