import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
} from "react-aria-components";

export default function AriaCalendar() {
  const { date, setDate } = useState<Date>();
  let now = today(getLocalTimeZone());

  return (
    <Flex direction="column" alignItems="center" mt={6}>
      <Text fontSize="2xl" mb={6}>
        React Aria Calendar
      </Text>
      <Calendar
        aria-label="Reservation Date"
        onChange={setDate}
        minValue={now}
        maxValue={now.add({ months: 3 })}
        firstDayOfWeek="sun"
      >
        <header>
          <Heading />

          <Flex gap={10}>
            <Button slot="previous">&lt;</Button>
            <Button slot="next">&gt;</Button>
          </Flex>
        </header>
        <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
      </Calendar>
      <Flex>
        <Text fontSize="3xl" mt={6} mb={6}>
          Reserve a Table
        </Text>
        <Text>{date ? `${date}` : ``}</Text>
      </Flex>
    </Flex>
  );
}
