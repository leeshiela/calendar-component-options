import {
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, ThHTMLAttributes, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface SelectedDateType {
  selected: Date | undefined;
  setSelected: Dispatch<SetStateAction<Date | undefined>>;
}

// interface CustomThProps extends ThHTMLAttributes<HTMLTableCellElement> {
//   date: Date;
// }
export default function MyDatePicker() {
  const todayDate = new Date();
  const [selected, setSelected] = useState<Date | undefined>(todayDate);
  const options = {
    month: "short",
    day: "numeric",
  };

  // const WeekDayCustom: React.FC<ThHTMLAttributes<HTMLTableCellElement>> = (props) => {
  //   const { date } = props;
  //   let dayOfWeek: string;

  //   switch (date.getDay()) {
  //     case 0:
  //       dayOfWeek = "Sun";
  //       break;
  //     case 1:
  //       dayOfWeek = "Mon";
  //       break;
  //     case 2:
  //       dayOfWeek = "Tue";
  //       break;
  //     case 3:
  //       dayOfWeek = "Wed";
  //       break;
  //     case 4:
  //       dayOfWeek = "Thu";
  //       break;
  //     case 5:
  //       dayOfWeek = "Fri";
  //       break;
  //     case 6:
  //       dayOfWeek = "Sat";
  //       break;
  //     default:
  //       dayOfWeek = "";
  //   }

  //   return <div>{dayOfWeek}</div>;
  // };

  const WeekDayCustom: React.FC<{
    children: string;
  }> = (props) => {
    const { children } = props;

    let label: string;

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
          <Button variant={"unstyled"} fontSize={"xl"}>
            {selected
              ? `${selected.toLocaleDateString("en-US", options).toUpperCase()}`
              : `Select Date`}
          </Button>
        </PopoverTrigger>
        <PopoverContent borderWidth={0}>
          <Flex direction={"row"}>
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
