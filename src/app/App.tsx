import { Container, Flex } from "@chakra-ui/react";
import ReactAriaCalendar from "./react-aria-datepicker/ReactAriaCalendar";

export function App() {
  return (
    <Container
      display="flex"
      maxW="600px"
      mx="auto"
      justifyContent="center"
      flexDir="row"
      pt="10"
    >
      <Flex fontSize="3xl">Calendar Component Options</Flex>
      <ReactAriaCalendar />
    </Container>
  );
}
