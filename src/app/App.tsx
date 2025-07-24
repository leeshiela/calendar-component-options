import { Container, Flex } from "@chakra-ui/react";
import MyDatePicker from "./react-daypicker/components/DayPickerCalendar";

export function App() {
  return (
    <Container display="flex" justifyContent="center" flexDir="column" pt="10">
      <Flex fontSize="3xl">Calendar Component Options</Flex>
      <Flex>
        <MyDatePicker />
      </Flex>
    </Container>
  );
}
