import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from '../../../features/dto/exercise.model';

@Pipe({
  name: 'exerciseSearch',
})
export class ExerciseSearchPipe implements PipeTransform {
  public transform(value: Exercise[], searchValue: string): Exercise[] {
    if (!searchValue) {
      return value;
    }

    return value.filter((exercise: Exercise) => {
      return exercise.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
