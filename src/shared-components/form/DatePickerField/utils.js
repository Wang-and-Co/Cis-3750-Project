export const handleDateChange = (event, helpers) => {
  event.persist();
  event.preventDefault();
  const caretStart = event.target.selectionStart;
  const caretEnd = event.target.selectionEnd;

  const val = event.target.value;
  console.log(typeof val);

  const date = new Date(val);
  const [realMonth, realDay, realYear] = val.split('/');
  console.log(realMonth, realDay, realYear);
  let dateSections = {};
  if (isNaN(date.getDate())) {
    console.log('backup');
    dateSections = {
      month: realMonth.substring(0, 2),
      day: realDay.substring(0, 2),
      year: realYear.substring(0, 4),
    };
  } else {
    dateSections = {
      month: (date.getMonth() + 1).toString().padStart(2, '0'),
      day: date.getDate().toString().padStart(2, '0'),
      year: date.getFullYear().toString(),
    };
  }
  const formattedDate = `${dateSections.month}/${dateSections.day}/${dateSections.year}`;
  const dateVerify = new Date(formattedDate);
  console.log(dateVerify);
  console.log('formatted', formattedDate);

  helpers.setValue(formattedDate, false); // set the date field to the formatted date
  event.target.setSelectionRange(caretStart, caretEnd);
};
