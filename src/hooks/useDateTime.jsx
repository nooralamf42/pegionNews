import { useState, useEffect } from 'react';

const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDateTime = (date) => {
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    };

    const formatter = new Intl.DateTimeFormat('en-IN', options);
    const parts = formatter.formatToParts(date);

    const formatPart = (type) => parts.find(part => part.type === type)?.value || '';

    const day = formatPart('day');
    const month = formatPart('month');
    const year = formatPart('year');
    const hour = formatPart('hour');
    const minute = formatPart('minute');
    const second = formatPart('second');
    const dayPeriod = formatPart('dayPeriod').toUpperCase();

    return `${day} ${month}, ${year}, ${hour}:${minute}:${second} ${dayPeriod} IST`;
  };

  return formatDateTime(dateTime);
};

export default useDateTime;