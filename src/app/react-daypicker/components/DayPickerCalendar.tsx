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
import {
  FC,
  forwardRef,
  JSX,
  ThHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { DayPicker } from "react-day-picker";

export default function MyDatePicker() {
  const todayDate = new Date();
  const [selected, setSelected] = useState<Date | undefined>(todayDate);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    if (isCalendarOpen) {
      setIsCalendarOpen(true);
    } else if (!isCalendarOpen) {
      setIsCalendarOpen(false);
    }
  }, [isCalendarOpen]);

  const handleSelect = (date: Date | undefined) => {
    setSelected(date);
    setIsCalendarOpen(!isCalendarOpen);
  };
  const WeekDayCustom: (
    props: ThHTMLAttributes<HTMLTableCellElement>
  ) => JSX.Element = (props) => {
    const { children, ...rest } = props;

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
          {...rest}
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
      return <></>;
    }
  };

  const CustomInput = forwardRef<HTMLInputElement>((props, ref) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };

    return (
      <Button
        variant={"unstyled"}
        fontSize={"xl"}
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        <Flex
          direction={"row"}
          gap={2}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          ref={ref}
          pt={4}
        >
          <Text>
            {selected
              ? `${selected.toLocaleDateString("en-US", options).toUpperCase()}`
              : `${todayDate
                  .toLocaleDateString("en-US", options)
                  .toUpperCase()}`}
          </Text>
          <Img
            id="chevron-down-arrow"
            src={"arrow.svg"}
            alt="Chevron Down Arrow"
            transform={isCalendarOpen ? "rotate(90deg)" : "rotate(270deg)"}
          />
        </Flex>
      </Button>
    );
  });

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

        <PopoverContent minWidth={"fit-content"} borderWidth={0}>
          <Flex direction={"row"}>
            <DayPicker
              captionLayout="label"
              disabled={{ before: todayDate }}
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
      </Popover>
    </Flex>
  );
}
