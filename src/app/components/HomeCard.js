import { Box, Card, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react'
import React from 'react'

export default function HomeCard({icon,title,description}) {
  return (
    <Box p={'1'}
    borderRadius={10}
    mt={5}
    w={['100%','100%','100%','25%','25%']}

    bgGradient={'linear-gradient(90.54deg, #aa1ecd 36.69%, #f79229 91.01%)'}
    >
        <Card bg={'#2D2D2D'}
        
    >
        <CardHeader pb={0}>
            {icon}
        </CardHeader>
        <CardBody pb={0}>
            <Heading size={'sm'}>{title}</Heading>
        </CardBody>
        <CardFooter>
            {description}
        </CardFooter>



    </Card>
    </Box>
  )
}
