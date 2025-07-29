import { Container, Flex } from "@chakra-ui/react";
import MyDatePicker from "./react-daypicker/components/DayPickerCalendar";

export function App() {
  return (
    <Container
      display="flex"
      justifyContent="center"
      flexDirection="column"
      pt="10"
    >
      <Flex fontSize="3xl" justifyContent={"space-around"}>
        Calendar Component Options
      </Flex>
      <Flex direction={"column"}>
        <MyDatePicker />
      </Flex>
    </Container>
  );
}
