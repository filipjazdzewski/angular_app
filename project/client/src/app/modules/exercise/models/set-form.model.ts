import { FormControl } from '@angular/forms';

export interface SetForm {
  readonly reps: FormControl<number | null>;
}
