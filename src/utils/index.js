export function getGameId() {
  const now = new Date();
  return +`${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}`;
}

export function getStartTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return new Date(`${year}/${month}/${day} 12:00:00`).getTime();
}

export function getEndTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return new Date(`${year}/${month}/${day} 24:00:00`).getTime();
}
