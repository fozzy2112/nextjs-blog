import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/core';
import useSWR from 'swr';

const Home = () => {
  return (
    <>
      <Box mt={5}>
        <Heading as="h1" textAlign="center" size="2xl" mb={5}>
          Difio Github Stats
        </Heading>
        <Flex justify="center">
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Flex>
      </Box>
    </>
  )
}

export default Home
