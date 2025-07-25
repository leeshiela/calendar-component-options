import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from "react-aria-components";

export default function ReactAriaCalendar() {
  return (
    <Calendar aria-label="Reservation Date">
      <header>
        <Button slot="previous">Left</Button>
        <Heading />
        <Button slot="next">Right</Button>
      </header>
      <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
    </Calendar>
  );
}
