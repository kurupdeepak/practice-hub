import { PipeTransform, Pipe } from '@angular/core';
import { BLOOD_GLUCOSE_CUTOFF } from '../data/blood-glucose-levels';

@Pipe({
  name: 'dbmparser',
  pure: true,
})
export class DbmPipeUtility implements PipeTransform {
  transform(value: number, type: string): string {
    if (type === 'risk_marker') {
      return this.transformRisk(value);
    }
    return "";
  }

  private transformRisk(value: number): string {
    if (
      value <= BLOOD_GLUCOSE_CUTOFF.LOW_CUTOFF ||
      value >= BLOOD_GLUCOSE_CUTOFF.HIGH_CUTOFF ||
      value >= BLOOD_GLUCOSE_CUTOFF.CRITICAL_CUTOFF
    ) {
      return 'marker-danger';
    }
    if (
      value > BLOOD_GLUCOSE_CUTOFF.LOW_CUTOFF &&
      value <= BLOOD_GLUCOSE_CUTOFF.MEDIUM_CUTOFF
    ) {
      return 'marker-success';
    }
    if (
      value > BLOOD_GLUCOSE_CUTOFF.MEDIUM_CUTOFF ||
      value <= BLOOD_GLUCOSE_CUTOFF.HIGH_CUTOFF
    ) {
      return 'marker-warning';
    }
  }
}
