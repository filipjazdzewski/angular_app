import { CanDeactivateFn } from '@angular/router';
import { ExerciseFormComponent } from '../../modules/exercise/components/exercise-form/exercise-form.component';

export const formDeactivateGuard: CanDeactivateFn<ExerciseFormComponent> = (
  component: ExerciseFormComponent,
) => {
  if (component.exerciseForm.dirty) {
    const confirmation: boolean = confirm(
      "You haven't submited your changes. \nAre you sure you want to leave this page?",
    );

    return confirmation;
  }

  return true;
};
