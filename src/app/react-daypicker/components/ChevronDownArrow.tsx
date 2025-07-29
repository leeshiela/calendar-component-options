import { Box, Img } from "@chakra-ui/react";

const ChevronDownArrow = () => {
  return (
    <Box>
      <Img
        id="chevron-down-arrow"
        src={"/src/img/arrow.jpg"}
        alt="Chevron Down Arrow"
      />
    </Box>
  );
};

export default ChevronDownArrow;
