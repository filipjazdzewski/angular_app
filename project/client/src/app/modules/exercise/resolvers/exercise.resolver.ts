import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Exercise } from '../../../features/dto/exercise.model';
import { ExerciseService } from '../../../features/services/exercise.service';

export const exerciseResolver: ResolveFn<Exercise> = (
  route: ActivatedRouteSnapshot,
) => {
  return inject(ExerciseService).getExercise(route.params['id']);
};
