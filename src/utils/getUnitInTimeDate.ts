export enum Unit {
  SECONDS,
  MINUTES,
  HOURS,
  DAYS
}

export const getUnitInTimeDate = (timedate, unit: Unit): string => {
  switch (unit) {
    case Unit.SECONDS:
      return String(Math.floor((timedate % (1000 * 60)) / 1000)).padStart(2, '0');
    case Unit.MINUTES:
      return String(Math.floor((timedate % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    case Unit.HOURS:
      return String(Math.floor((timedate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    case Unit.DAYS:
      return String(Math.floor(timedate / (1000 * 60 * 60 * 24))).padStart(2, '0');
  }
};
