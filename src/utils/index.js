export function getGameId() {
  const now = new Date();
  return +`${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}`;
}

export function getStartTime() {
  return new Date().getTime() + 1 * 60 * 60 * 1000;
}

export function getEndTime() {
  const now = new Date();
  const endTime = now.getTime() + 24 * 60 * 60 * 1000;
  const endTimeDate = new Date(endTime);
  const year = endTimeDate.getFullYear();
  const month = endTimeDate.getMonth() + 1;
  const day = endTimeDate.getDate();
  return new Date(`${year}/${month}/${day} 12:00:00`).getTime();
}
