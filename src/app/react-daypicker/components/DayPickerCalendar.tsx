import {
  Button,
  Flex,
  Img,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function MyDatePicker() {
  const todayDate = new Date();
  const [selected, setSelected] = useState<Date | undefined>(todayDate);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const options = {
    month: "short",
    day: "numeric",
  };

  useEffect(() => {
    if (isCalendarOpen) {
      setIsCalendarOpen(true);
      console.log("Calendar is open");
    } else if (!isCalendarOpen) {
      setIsCalendarOpen(false);
      console.log("Calendar is closed");
    }
  }, [isCalendarOpen]);

  const handleSelect = (date: Date | undefined) => {
    setSelected(date);
    setIsCalendarOpen(!isCalendarOpen);
  };
  const WeekDayCustom: FC<{
    children: React.ReactNode;
  }> = (props) => {
    const { children } = props;

    let label: string;

    if (typeof children === "string") {
      switch (children) {
        case "Su":
          label = "Sun";
          break;
        case "Mo":
          label = "Mon";
          break;
        case "Tu":
          label = "Tue";
          break;
        case "We":
          label = "Wed";
          break;
        case "Th":
          label = "Thu";
          break;
        case "Fr":
          label = "Fri";
          break;
        case "Sa":
          label = "Sat";
          break;
        default:
          label = "";
      }

      return (
        <th style={{ color: "gray", paddingBottom: "18px", fontWeight: 400 }}>
          {label}
        </th>
      );
    } else {
      return (
        <th style={{ color: "gray", paddingBottom: "18px", fontWeight: 400 }}>
          {children}
        </th>
      );
    }
  };

  // const ChevronCustom: FC<{
  //   children: React.ReactNode;
  // }> = ({ children }) => {
  //   if (typeof children === "svg") {
  //     return (
  //       <Img
  //         src={"arrow.svg"}
  //         alt="Chevron Down Arrow"
  //         width={6}
  //         height={6}/>
  //     );
  // }

  return (
    <Flex
      direction="column"
      pt={8}
      pb={8}
      pl={6}
      pr={6}
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="xl">React DayPicker</Text>
      <Popover
        isOpen={isCalendarOpen}
        onOpen={() => setIsCalendarOpen(true)}
        onClose={() => setIsCalendarOpen(false)}
      >
        <PopoverTrigger>
          <Flex direction={"row"} gap={2} justifyContent={"space-evenly"}>
            <Button variant={"unstyled"} fontSize={"xl"} pt={4} pb={4}>
              {selected
                ? `${selected
                    .toLocaleDateString("en-US", options)
                    .toUpperCase()}`
                : `${todayDate
                    .toLocaleDateString("en-US", options)
                    .toUpperCase()}`}
            </Button>
            <Flex alignItems={"end"}>
              <Img
                id="chevron-down-arrow"
                src={"arrow.svg"}
                alt="Chevron Down Arrow"
                transform={isCalendarOpen ? "rotate(90deg)" : "rotate(270deg)"}
              />
            </Flex>
          </Flex>
        </PopoverTrigger>
        <PopoverContent borderWidth={0}>
          <Flex direction={"row"} pt={4}>
            <DayPicker
              captionLayout="label"
              disabled={{ before: todayDate }}
              navLayout="after"
              mode="single"
              selected={selected}
              onSelect={handleSelect}
              timeZone=""
              weekStartsOn={0}
              showOutsideDays
              components={{
                Weekday: WeekDayCustom,
                // Chevron: ChevronCustom,
              }}
            />
          </Flex>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
