import { format, parse } from 'date-fns';

const NUM_OF_PERIOD_DATES = 6;

export default class MenstrualPeriodService {
  static calculateNextPeriodDate(lastPeriodDate, cycleLength, periodLength) {
    const date = parse(lastPeriodDate, 'yyyy-MM-dd', new Date());
    const nextPeriodDate = new Date(date.getTime() + (cycleLength - periodLength) * 24 * 60 * 60 * 1000);
    return format(nextPeriodDate, 'yyyy-MM-dd');
  }

  static getEstimatedPeriodDates(nextPeriodDate, cycleLength, periodLength) {
    const date = parse(nextPeriodDate, 'yyyy-MM-dd', new Date());

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date string');
    }

    const estimatedPeriodDates = [];
    for (let i = 0; i < NUM_OF_PERIOD_DATES; i++) {
      const periodDate = new Date(date.getTime() + cycleLength * 24 * 60 * 60 * 1000);
      estimatedPeriodDates.push(format(periodDate, 'yyyy-MM-dd'));
      date.setTime(periodDate.getTime());
    }

    return estimatedPeriodDates;
  }
}

