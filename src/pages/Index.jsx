import { Box, Container, Heading, Text, Button, Image, Stack, Flex, Icon } from "@chakra-ui/react";
import { FaCut, FaStar, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="teal.500" color="white" py={10} textAlign="center">
        <Heading as="h1" size="xl" mb={2}>
          Phuket Hair Styling Services
        </Heading>
        <Text fontSize="lg">Expert Dreadlocks, Braids & Hair Extensions</Text>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" p={10}>
        <Box flex="1" textAlign="center">
          <Image borderRadius="full" boxSize="250px" src="https://images.unsplash.com/photo-1496526713442-c6b403055df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmVhZGxvY2tzJTIwYXJ0aXN0fGVufDB8fHx8MTcxMzc5NzQ1NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Dreadlocks Artist" mb={4} />
          <Heading as="h3" size="lg">
            Dreadlocks
          </Heading>
          <Text mt={2}>Perfectly styled and maintained dreadlocks.</Text>
        </Box>
        <Box flex="1" textAlign="center">
          <Image borderRadius="full" boxSize="250px" src="https://images.unsplash.com/photo-1592328906746-0a3ca0bde253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFpZHMlMjBoYWlyc3R5bGV8ZW58MHx8fHwxNzEzNzk3ODEwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Braids Hairstyle" mb={4} />
          <Heading as="h3" size="lg">
            Braids
          </Heading>
          <Text mt={2}>Beautiful, intricate braids for all occasions.</Text>
        </Box>
        <Box flex="1" textAlign="center">
          <Image borderRadius="full" boxSize="250px" src="https://images.unsplash.com/photo-1630082900894-edbd503588f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWlyJTIwZXh0ZW5zaW9uc3xlbnwwfHx8fDE3MTM3OTc4MTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hair Extensions" mb={4} />
          <Heading as="h3" size="lg">
            Hair Extensions
          </Heading>
          <Text mt={2}>High-quality, natural-looking extensions.</Text>
        </Box>
      </Flex>

      <Stack spacing={4} direction="row" justify="center" p={10}>
        <Button leftIcon={<Icon as={FaPhoneAlt} />} colorScheme="teal" variant="solid">
          Contact Us
        </Button>
        <Button leftIcon={<Icon as={FaCut} />} colorScheme="teal" variant="outline">
          Book Now
        </Button>
        <Button leftIcon={<Icon as={FaStar} />} colorScheme="yellow" variant="ghost">
          Reviews
        </Button>
      </Stack>
    </Container>
  );
};

export default Index;
