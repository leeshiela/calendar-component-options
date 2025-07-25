import { Container, Flex } from "@chakra-ui/react";
import AriaCalendar from "./react-aria-datepicker/ReactAriaCalendar";

export function App() {
  return (
    <Container
      display="flex"
      maxW="600px"
      mx="auto"
      justifyContent="center"
      flexDir="column"
      pt="10"
    >
      <Flex fontSize="3xl" justifyContent="center" alignItems="center">
        Calendar Component Options
      </Flex>
      <AriaCalendar />
    </Container>
  );
}
