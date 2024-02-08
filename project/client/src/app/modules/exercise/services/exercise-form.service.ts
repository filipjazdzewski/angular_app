import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExerciseForm } from '../models/exercise-form.model';
import { SetForm } from '../models/set-form.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseFormService {
  public exerciseForm: FormGroup = new FormGroup<ExerciseForm>({
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required),
    equipment: new FormControl<string>('', Validators.required),
    bodyPart: new FormControl<string>('', Validators.required),
    sets: new FormArray<FormGroup<SetForm>>([]),
  });

  public addSetForm(): void {
    (this.exerciseForm.controls['sets'] as FormArray).push(
      new FormGroup<SetForm>({
        reps: new FormControl<number | null>(null, [
          Validators.required,
          Validators.min(1),
        ]),
      }),
    );
  }

  public deleteSetForm(index: number): void {
    (this.exerciseForm.controls['sets'] as FormArray).removeAt(index);
  }

  public resetSetForm(): void {
    (this.exerciseForm.controls['sets'] as FormArray).clear();
  }
}
