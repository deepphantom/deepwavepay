// Function to get the ordinal suffix
function getOrdinalSuffix(day: any) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

// Function to get the formatted date
function getFormattedDate() {
  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "short" });
  const year = today.getFullYear();

  const dayWithSuffix = day + getOrdinalSuffix(day);

  return `${dayWithSuffix} ${month} ${year}`;
}

// Get today's formatted date
export const DateToday = getFormattedDate();
