import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    if (isCalendarOpen) {
      setIsCalendarOpen(true);
      console.log("Calendar is open");
    } else if (!isCalendarOpen) {
      setIsCalendarOpen(false);
      console.log("Calendar is closed");
    }
  }, [isCalendarOpen]);
  const formatDate = (date: Date | null) => {
    if (date !== null) {
      return dayjs(date).format("MMM D").toUpperCase();
    }
  };

  const handleChange = (date: Date | null) => {
    if (date !== null) {
      setSelectedDate(date);
      setIsCalendarOpen(!isCalendarOpen);
    }
  };

  const customInput = () => {
    return (
      <Button type="button" variant="totallyUnstyled" color={"black"}>
        <Flex
          direction={"row"}
          gap={2}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          pt={4}
        >
          <Heading fontSize={"lg"} as="div" mr={2.5}>
            {formatDate(selectedDate)}
          </Heading>
          <Img
            id="chevron-down-arrow"
            src={"arrow.svg"}
            alt="Chevron Down Arrow"
            transform={isCalendarOpen ? "rotate(90deg)" : "rotate(270deg)"}
          />
        </Flex>
      </Button>
    );
  };

  return (
    <Flex
      direction="column"
      pt={2}
      pb={2}
      pl={6}
      pr={6}
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="xl">React DatePicker</Text>
      {/* <Popover
        isOpen={isCalendarOpen}
        onOpen={() => setIsCalendarOpen(true)}
        onClose={() => setIsCalendarOpen(false)}
        placement="bottom"
      >
        <PopoverTrigger>
          <CustomInput ref={popoverRef} />
        </PopoverTrigger>
        <PopoverContent> */}
      <DatePicker
        selected={selectedDate}
        dateFormat="MMM d"
        useWeekdaysShort
        onChange={handleChange}
        customInput={customInput()}
        onCalendarOpen={() => setIsCalendarOpen(true)}
        onCalendarClose={() => setIsCalendarOpen(false)}
        enableTabLoop={false}
        showPopperArrow={false}
        calendarClassName="calendar"
        popperClassName="popper"
        minDate={new Date()}
        weekDayClassName={(_date: Date) => "weekdays"}
        renderCustomHeader={({ date, increaseMonth, decreaseMonth }) => (
          <Flex
            className="customHeader"
            justifyContent={"space-between"}
            paddingLeft={2}
          >
            <Heading fontSize={"sm"} as="div">
              {dayjs(date).format("MMMM YYYY")}
            </Heading>
            <Flex
              direction={"row"}
              alignItems={"start"}
              justifyContent={"center"}
            >
              <Button
                variant={"unstyled"}
                onClick={decreaseMonth}
                paddingLeft={2}
                paddingBottom={6}
              >
                <img className="arrows" src="/arrow.svg" alt="previous-arrow" />
              </Button>
              <Button
                variant={"unstyled"}
                onClick={increaseMonth}
                paddingLeft={2}
                paddingBottom={6}
              >
                <img
                  className="arrows"
                  style={{ transform: "rotate(180deg)" }}
                  src="/arrow.svg"
                  alt="next-arrow"
                />
              </Button>
            </Flex>
          </Flex>
        )}
      />
      {/* </PopoverContent>
      </Popover>*/}
    </Flex>
  );
};
export default DatePickerCalendar;
