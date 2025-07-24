import { Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface SelectedDateType {
  selected: Date | undefined;
  setSelected: Dispatch<SetStateAction<Date | undefined>>;
}

export default function MyDatePicker() {
  const { selected, setSelected } = useState<Date | undefined>();
  const todayDate = new Date();

  return (
    <Flex
      direction="column"
      pt={8}
      pb={8}
      pl={6}
      pr={6}
      align="center"
      justifyContent="center"
    >
      <Text fontSize="xl">React DayPicker</Text>
      <Flex fontSize="xl" pb={4}>
        {selected ? `${selected.toLocaleDateString()}` : ``}
      </Flex>
      <Flex direction="column" align="center" justifyContent="center">
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
        />
      </Flex>
    </Flex>
  );
}
