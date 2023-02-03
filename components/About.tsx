'use client'

import {
    Container,
    Grid,
    GridItem,
    Flex,
    Box,
    Text,
    Heading,
    Button,
    StackProps
  } from '@chakra-ui/react';
  import Link from 'next/link';

  interface FeatureProps extends StackProps {
    href: any;
}

function Button2(props: FeatureProps) {
    const { href, children, ...rest } = props
    return (
        <Link href={href} passHref>
            {/*@ts-ignore*/}
            <Button {...rest}>
                {children}
            </Button>
        </Link>
    );
}
  
 export default function About() {
    return (
      <Container py={5} maxW={'full'} borderTop={"1px"} borderColor={"chakra-border-color"}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={6}>
          <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
            <Heading as={'h2'}>About Us</Heading>
            <Text pt="10px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque numquam porro placeat fugiat quas illo deserunt eligendi cupiditate rem ratione modi at nisi repellat molestiae esse, inventore eius eos. Veniam?</Text>
            <Button2 mt="10px" href="https://google.com" _hover={{bg:"red",textColor:"white"}}>Read More</Button2>
          </GridItem>
          <GridItem w="100%" mt="30px">
            <Flex flexDirection={'column'} borderLeft={"2px"} borderColor={"red.600"}>
              <Text pl="10px" fontSize={'4xl'} fontWeight={'bold'}>
                3500+
              </Text>
              <Text pl="10px"> DAO Members</Text>
            </Flex>
          </GridItem>
          <GridItem w="100%" mt={"30px"}>
          <Flex flexDirection={'column'} borderLeft={"2px"} borderColor={"red.600"}>
              <Text pl="10px" fontSize={'4xl'} fontWeight={'bold'}>
                7
              </Text>
              <Text pl="10px"> Faculty Members</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    );
  }
  