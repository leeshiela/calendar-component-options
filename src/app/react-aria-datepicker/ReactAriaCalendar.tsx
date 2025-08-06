import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import {
  Flex,
  Img,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { lazy, useEffect, useState } from "react";
import { DateValue } from "react-aria-components";

const Button = lazy(() =>
  import("react-aria-components").then((module) => ({ default: module.Button }))
);
const Calendar = lazy(() =>
  import("react-aria-components").then((module) => ({
    default: module.Calendar,
  }))
);
const CalendarCell = lazy(() =>
  import("react-aria-components").then((module) => ({
    default: module.CalendarCell,
  }))
);
const CalendarGrid = lazy(() =>
  import("react-aria-components").then((module) => ({
    default: module.CalendarGrid,
  }))
);

const Heading = lazy(() =>
  import("react-aria-components").then((module) => ({
    default: module.Heading,
  }))
);

export default function AriaCalendar() {
  let now = today(getLocalTimeZone());
  const [date, setDate] = useState<CalendarDate | undefined>(now);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isCalendarOpen) {
      setIsCalendarOpen(true);
    } else if (!isCalendarOpen) {
      setIsCalendarOpen(false);
    }
  }, [isCalendarOpen]);

  const handleOnChange = (date: DateValue | undefined) => {
    if (date) {
      setDate(date as CalendarDate);
    } else {
      setDate(undefined);
    }
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <Flex direction="column" alignItems="center" mt={6}>
      <Text fontSize="2xl" mb={6}>
        React Aria Calendar
      </Text>
      <Popover
        isOpen={isCalendarOpen}
        onOpen={() => setIsCalendarOpen(true)}
        onClose={() => setIsCalendarOpen(false)}
        placement="bottom"
      >
        <PopoverTrigger>
          <Button onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
            <Flex
              flexDirection={"row"}
              gap={2}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Text id="custom-input" pt={4} pb={4}>
                {date
                  ? `${date
                      .toDate(getLocalTimeZone())
                      .toLocaleDateString("en-US", options)
                      .toUpperCase()}`
                  : ``}
              </Text>
              <Img
                id="chevron-down-arrow"
                src="arrow.svg"
                alt="chevron down arrow"
                transform={isCalendarOpen ? "rotate(90deg)" : "rotate(270deg)"}
              />
            </Flex>
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent minWidth={"fit-content"} borderWidth={0}>
            <Calendar
              aria-label="Reservation Date"
              onChange={handleOnChange}
              minValue={now}
            >
              <header>
                <Heading />
                <Flex gap={10}>
                  <Button slot="previous">
                    <img
                      className="arrows"
                      src="/arrow.svg"
                      alt="previous-arrow"
                    />
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
              <CalendarGrid weekdayStyle="short">
                {(date) => <CalendarCell date={date} />}
              </CalendarGrid>
            </Calendar>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
}
