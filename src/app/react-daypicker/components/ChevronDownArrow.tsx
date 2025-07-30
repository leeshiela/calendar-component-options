import { Box, Flex, Img } from "@chakra-ui/react";

const ChevronDownArrow = () => {
  return (
    <Flex alignItems={"end"}>
      <Img id="chevron-down-arrow" src={"arrow.svg"} alt="Chevron Down Arrow" />
    </Flex>
  );
};

export default ChevronDownArrow;
