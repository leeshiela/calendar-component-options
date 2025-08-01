import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
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

interface OptionsType {
  day: string | undefined;
  month: string | undefined;
}

export default function AriaCalendar() {
  let now = today(getLocalTimeZone());
  const [date, setDate] = useState<CalendarDate | undefined>(now);
  const options: OptionsType = { day: "numeric", month: "short" };

  return (
    <Flex direction="column" alignItems="center" mt={6}>
      <Text fontSize="2xl" mb={6}>
        React Aria Calendar
      </Text>
      <Flex>
        <Text fontSize="3xl" mt={6} mb={6}>
          {date
            ? `${date
                .toDate(getLocalTimeZone())
                .toLocaleDateString("en-US", options)}`
            : ``}
        </Text>
      </Flex>
      <Calendar
        aria-label="Reservation Date"
        onChange={setDate}
        minValue={now}
        firstDayOfWeek="sun"
      >
        <header>
          <Heading />

          <Flex gap={10}>
            <Button slot="previous">
              <img className="arrows" src="/arrow.svg" alt="previous-arrow" />
            </Button>
            <Button slot="next">
              <img
                className="arrows"
                style={{ transform: "rotate(180deg)" }}
                src="/arrow.svg"
                alt="next-arrow"
              />
            </Button>
          </Flex>
        </header>
        <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
      </Calendar>
    </Flex>
  );
}
