import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import ChevronDownArrow from "./ChevronDownArrow";

interface SelectedDateType {
  selected: Date | undefined;
  setSelected: Dispatch<SetStateAction<Date | undefined>>;
}

export default function MyDatePicker() {
  const todayDate = new Date();
  const [selected, setSelected] = useState<Date | undefined>(todayDate);
  const options = {
    month: "short",
    day: "numeric",
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

      return <th>{label}</th>;
    } else {
      return <th>{children}</th>;
    }
  };

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
      <Popover>
        <PopoverTrigger>
          <Flex direction={"row"} gap={2} justifyContent={"space-evenly"}>
            <Button variant={"unstyled"} fontSize={"xl"} pt={4} pb={4}>
              {selected
                ? `${selected
                    .toLocaleDateString("en-US", options)
                    .toUpperCase()}`
                : `Select Date`}
            </Button>
            <ChevronDownArrow />
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
              onSelect={setSelected}
              timeZone=""
              weekStartsOn={0}
              showOutsideDays
              components={{
                Weekday: WeekDayCustom,
              }}
            />
          </Flex>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
