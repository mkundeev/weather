export const dateForQuery = (date: Date) => {
  const startDate = date.toISOString().slice(0, 10);
  const followingDay = new Date(date.getTime() + 86400000); // + 1 day in ms
  const endDate = followingDay.toISOString().slice(0, 10);
  return { startDate, endDate };
};
