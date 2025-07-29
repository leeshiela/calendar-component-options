import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  const formatDate = (date: Date | null) => {
    if (date !== null) {
      return dayjs(date).format("MMM D").toUpperCase();
    }
  };

  const handleChange = (date: Date | null) => {
    if (date !== null) {
      setSelectedDate(date);
    }
  };

  const renderDateSelect = () => {
    return (
      <Button type="button" variant="totallyUnstyled" color={"black"}>
        <Heading fontSize={"lg"} as="div" mr={2.5}>
          {formatDate(selectedDate)}
        </Heading>
        {/* <ChevronDownIcon
          size={2.5}
          transform={calendarOpen ? "rotate(180deg)" : "rotate(0deg)"}
          transition="transform 0.1s ease"
        /> */}
      </Button>
    );
  };

  return (
    <DatePicker
      selected={selectedDate}
      dateFormat="MMM d"
      useWeekdaysShort
      onChange={handleChange}
      customInput={renderDateSelect()}
      onCalendarOpen={() => setCalendarOpen(true)}
      onCalendarClose={() => setCalendarOpen(false)}
      enableTabLoop={false}
      showPopperArrow={false}
      calendarClassName="calendar"
      popperClassName="popper"
      minDate={new Date()}
      weekDayClassName={(_date: Date) => "weekdays"}
      renderCustomHeader={({ date }) => (
        <Box
          className="customHeader"
          backgroundColor="white"
          display="flex"
          alignItems="flex-start"
          paddingLeft={2}
        >
          <Heading fontSize={"sm"} as="div">
            {dayjs(date).format("MMMM YYYY")}
          </Heading>
        </Box>
      )}
    />
  );
};
export default DatePickerCalendar;
