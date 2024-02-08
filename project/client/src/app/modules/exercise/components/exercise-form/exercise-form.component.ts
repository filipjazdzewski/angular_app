import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ExerciseFormDto } from '../../../../features/dto/exercise-form.dto.model';
import { Exercise } from '../../../../features/dto/exercise.model';
import { ExerciseService } from '../../../../features/services/exercise.service';
import { ExerciseForm } from '../../models/exercise-form.model';
import { SetForm } from '../../models/set-form.model';
import { ExerciseFormService } from '../../services/exercise-form.service';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.scss',
  providers: [MessageService],
})
export class ExerciseFormComponent implements OnInit {
  public exerciseForm: FormGroup<ExerciseForm> =
    this.exerciseFormService.exerciseForm;
  protected exercise: Exercise | null = null;

  protected bodyPartOptions: string[] = [
    'abs',
    'back',
    'biceps',
    'calves',
    'cardio',
    'chest',
    'neck',
    'legs',
    'shoulders',
    'triceps',
  ];

  protected equipmentOptions: string[] = [
    'barbell',
    'dumbbell',
    'kettlebell',
    'machine',
    'other',
    'none',
  ];

  public constructor(
    private exerciseFormService: ExerciseFormService,
    private exerciseService: ExerciseService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
  ) {}

  public ngOnInit(): void {
    this.exerciseForm.reset();
    this.exerciseFormService.resetSetForm();
    const exerciseId: string | null = this.route.snapshot.paramMap.get('id');
    if (exerciseId) {
      this.exerciseService
        .getExercise(exerciseId)
        .subscribe((exercise: Exercise) => {
          this.exercise = exercise;
          exercise.sets.forEach(() => this.exerciseFormService.addSetForm());
          this.exerciseForm.patchValue(exercise);
        });
    }
  }

  // set - seria (nie mylić z setterem)
  protected get sets(): FormArray<FormGroup<SetForm>> {
    return this.exerciseForm.controls['sets'] as FormArray<FormGroup<SetForm>>;
  }

  protected addSet(): void {
    this.exerciseFormService.addSetForm();
  }

  protected deleteSet(index: number): void {
    this.exerciseFormService.deleteSetForm(index);
  }

  protected onSubmit(): void {
    if (this.exerciseForm.valid) {
      const exerciseFormData: ExerciseFormDto = this.exerciseForm.getRawValue();

      if (this.exercise) {
        this.exerciseService
          .updateExercise(this.exercise._id, exerciseFormData)
          .subscribe({
            next: this.handleUpdateSuccess.bind(this),
            error: this.handleUpdateError.bind(this),
          });
      } else {
        this.exerciseService.createExercise(exerciseFormData).subscribe({
          next: this.handleCreateSuccess.bind(this),
          error: this.handleCreateError.bind(this),
        });
      }
    }
  }

  private handleCreateSuccess(): void {
    this.exerciseForm.disable();
    setTimeout(() => {
      this.router.navigate(['/exercises']);
      this.exerciseForm.reset();
      this.exerciseForm.enable();
    }, 2000);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Exercise created successfully',
      life: 3000,
    });
  }

  private handleCreateError(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Exercise creation unsuccessful',
      life: 3000,
    });
  }

  private handleUpdateSuccess(): void {
    this.exerciseForm.disable();
    setTimeout(() => {
      this.router.navigate(['/exercises']);
      this.exerciseForm.reset();
      this.exerciseForm.enable();
    }, 2000);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Exercise updated successfully',
      life: 3000,
    });
  }

  private handleUpdateError(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Exercise update unsuccessful',
      life: 3000,
    });
  }
}
