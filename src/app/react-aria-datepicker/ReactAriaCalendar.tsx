import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import {
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateValue,
  Heading,
} from "react-aria-components";

export default function AriaCalendar() {
  let now = today(getLocalTimeZone());
  const [date, setDate] = useState<CalendarDate | undefined>(now);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  // const [selected, setSelected] = useState<Date | undefined>(now);

  useEffect(() => {
    if (isCalendarOpen) {
      setIsCalendarOpen(true);
      console.log("Calendar is open");
    } else if (!isCalendarOpen) {
      setIsCalendarOpen(false);
      console.log("Calendar is closed");
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
          <Flex>
            <Text fontSize="3xl" cursor={"pointer"} mt={6} mb={6}>
              {date
                ? `${date
                    .toDate(getLocalTimeZone())
                    .toLocaleDateString("en-US", options)}`
                : ``}
            </Text>
          </Flex>
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
              <CalendarGrid>
                {(date) => <CalendarCell date={date} />}
              </CalendarGrid>
            </Calendar>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
}
