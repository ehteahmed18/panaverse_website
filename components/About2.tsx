import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    StackProps,
    Box,
    Avatar,
    useColorModeValue
  } from '@chakra-ui/react';
import Link from 'next/link';
import styles from "./About.module.css"

  interface FeatureProps extends StackProps {
    href: any;
  }
  
  function Button2(props: FeatureProps) {
    const { href, children, ...rest } = props
    return (
      /*@ts-ignore*/
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
      <Container maxW={'full'}>
        <Stack className={styles.about}
          // textAlign={'center'}
          // align={'center'}
          spacing={{ base: 6, md: 8 }}
          m={{base:5,md:10}}
          p={{ base: 3, md: 5 }}
          border="2px"
          borderRadius={"3xl"}
          bg={useColorModeValue('gray.50', 'gray.800')}
          >
          <Heading className={styles.fadeinimage}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            lineHeight={'100%'}>
            What is{' '}
            <Text as={'span'} color={'red.400'}>
              Panaverse Dao ?
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'full'} className={styles.fadeinimage}>
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of more than 3500 developers, designers, trainers, startup founders and service providers from 4 big cities of Pakistan and aim to spread all over the country.
          </Text>
          <Stack spacing={4} direction={'row'}>
            <Button2 rounded={'full'} px={4} href='https://www.panaverse.co/#:~:text=Panaverse%20DAO%20is%20a%20movement,startup%20founders%20and%20service%20providers.' _hover={{bg:"red.400",textColor:"white"}}>
              Learn more
            </Button2>
          </Stack>
          </Stack>
          <Stack className={styles.about}
          spacing={{ base: 6, md: 8 }}
          m={{base:5,md:10}}
          p={{ base: 3, md: 5 }}
          border="2px"
          borderRadius={"3xl"}
          bg={useColorModeValue('gray.50', 'gray.800')}
          >
          <Heading className={styles.fadeinimage}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            lineHeight={'100%'}
            >
            The Program in a Nutshell:{' '}
            <Text as={'span'} color={'red.400'}>
              Earn While You Learn
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'full'} className={styles.fadeinimage}>
          In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the programs beginning. It resembles a cross between a corporate venture and an educational project.
          </Text>
        </Stack>
          <Stack className={styles.about}
          spacing={{ base: 6, md: 8 }}
          m={{base:5,md:10}}
          p={{ base: 3, md: 5 }}
          border="2px"
          borderRadius={"3xl"}
          bg={useColorModeValue('gray.50', 'gray.800')}
          >
          <Heading className={styles.fadeinimage}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            lineHeight={'50%'}>
            Our{' '}
            <Text as={'span'} color={'red.400'}>
              Goal
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'full'} className={styles.fadeinimage}>
          The mission of Panaverse is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
          </Text>
        </Stack>
        <Stack
      // bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
        <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'80%'}>
              Our{' '}
              <Text as={'span'} color={'red.400'}>
              Faculty
            </Text>  
          </Heading>
      <Box textAlign={'center'}>
        <Avatar
          src={
            './sirzia.jpeg'
          }
        //   alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Sir Zia Khan</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Vice President
        </Text>
      </Box>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            './siradil.jpeg'
          }
        //   alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Sir Adil Altaf</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Vice President
        </Text>
      </Box>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            './misshira.jpeg'
          }
        //   alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Miss Hira khan</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Vice President
        </Text>
      </Box>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
      </Text>
    </Stack>
      </Container>
    );
  }
  
  