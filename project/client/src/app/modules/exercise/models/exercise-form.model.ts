import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SetForm } from './set-form.model';

export interface ExerciseForm {
  readonly name: FormControl<string | null>;
  readonly description: FormControl<string | null>;
  readonly equipment: FormControl<string | null>;
  readonly bodyPart: FormControl<string | null>;
  readonly sets: FormArray<FormGroup<SetForm>>;
}
