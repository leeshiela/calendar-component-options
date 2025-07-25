import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from "react-aria-components";

export default function AriaCalendar() {
  const { value, setValue } = useState<CalendarDate>();
  let now = today(getLocalTimeZone());

  return (
    <Flex direction="column" alignItems="center" mt={6}>
      <Text fontSize="xl">React Aria Calendar</Text>
      <Flex>
        <Text fontSize="3xl" mt={6} mb={6}>
          Reserve a Table
        </Text>
        <Text>{value ? `${value}` : ``}</Text>
      </Flex>
      <Calendar
        aria-label="Reservation Date"
        onChange={setValue}
        minValue={now}
        maxValue={now.add({ months: 3 })}
      >
        <header>
          <Heading />
          <Flex gap={6}>
            <Button slot="previous">&lt;</Button>
            <Button slot="next">&gt;</Button>
          </Flex>
        </header>
        <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
      </Calendar>
    </Flex>
  );
}
