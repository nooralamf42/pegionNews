export const formatDate = (dateString)=> {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

export const formatDateTime = (dateString)=> {
  // Parse the input date string
  const date = new Date(dateString);

  // Define month names for formatting
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Extract components of the date
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  // Get the hour, minute and second, adjusting for AM/PM format
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;
  hours = hours % 12 || 12; // Convert to 12-hour format, handle midnight as 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Ensure two-digit minute
  
  // Format the time part
  const time = `${hours}:${formattedMinutes} ${isPM ? "PM" : "AM"}`;

  // Get timezone offset in hours and minutes
  const timezoneOffset = date.getTimezoneOffset(); // returns offset in minutes
  const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
  const offsetMinutes = Math.abs(timezoneOffset % 60);
  const timezoneSign = timezoneOffset <= 0 ? "+" : "-";
  const timezone = `GMT${timezoneSign}${offsetHours}:${offsetMinutes < 10 ? '0' : ''}${offsetMinutes}`;
  
  // Return the formatted string
  return `${month} ${day}, ${year}, ${time} ${timezone}`;
}

