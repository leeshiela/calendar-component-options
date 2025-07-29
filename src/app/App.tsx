import { Container, Flex } from "@chakra-ui/react";
import DatePickerCalendar from "./react-datepicker/components/DatePickerCalendar";

export function App() {
  return (
    <Container
      display="flex"
      mx="auto"
      justifyContent="center"
      flexDir="column"
      pt="10"
    >
      <Flex fontSize="3xl" justifyContent="center">
        Calendar Component Options
      </Flex>
      <Flex
        mt={6}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <DatePickerCalendar />
      </Flex>
    </Container>
  );
}
