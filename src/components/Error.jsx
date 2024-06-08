import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';

 
  
export default function Error() {
    return (
      <div>
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle textAlign={"center"}>Something Went Wrong!</AlertTitle>
            <AlertDescription>Error</AlertDescription>
        </Alert>  
      </div>
    )
  }
  