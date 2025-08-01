import "react-day-picker/style.css";
import {
  Button,
  Flex,
  Img,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { FC, forwardRef, useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";

export default function MyDatePicker() {
  const todayDate = new Date();
  const [selected, setSelected] = useState<Date | undefined>(todayDate);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const popoverRef = useRef(null);

  // const options = {
  //   month: "short",
  //   day: "numeric",
  // };

  useEffect(() => {
    if (isCalendarOpen) {
      setIsCalendarOpen(true);
      console.log("Calendar is open");
    } else if (!isCalendarOpen) {
      setIsCalendarOpen(false);
      console.log("Calendar is closed");
    }
  }, [isCalendarOpen]);

  useEffect(() => {
    if (popoverRef.current) {
      popoverRef.current.focus();
    }
  }, []);

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
        <th
          style={{
            color: "gray",
            paddingBottom: "18px",
            fontWeight: 400,
            letterSpacing: "1px",
            fontSize: "14px",
          }}
        >
          {label}
        </th>
      );
    } else {
      return (
        <th
          style={{
            color: "gray",
            paddingBottom: "18px",
            fontWeight: 400,
            letterSpacing: "1px",
            fontSize: "14px",
          }}
        >
          {children}
        </th>
      );
    }
  };

  const CustomInput = forwardRef<HTMLInputElement>((props, ref) => {
    const options = {
      month: "short",
      day: "numeric",
    };

    return (
      <Flex
        direction={"row"}
        gap={2}
        justifyContent={"space-evenly"}
        alignItems={"end"}
        ref={ref}
      >
        <Button
          variant={"unstyled"}
          fontSize={"xl"}
          pt={4}
          pb={4}
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        >
          {selected
            ? `${selected.toLocaleDateString("en-US", options).toUpperCase()}`
            : `${todayDate.toLocaleDateString("en-US", options).toUpperCase()}`}
        </Button>
        <Img
          id="chevron-down-arrow"
          src={"arrow.svg"}
          alt="Chevron Down Arrow"
          transform={isCalendarOpen ? "rotate(90deg)" : "rotate(270deg)"}
        />
      </Flex>
    );
  });

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
        placement="bottom"
      >
        <PopoverTrigger>
          <CustomInput ref={popoverRef} />
        </PopoverTrigger>
        <Portal>
          <PopoverContent minWidth={"fit-content"} borderWidth={0}>
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
                }}
              />
            </Flex>
          </PopoverContent>
        </Portal>
      </Popover>
    </Flex>
  );
}
