/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Exercise } from '../../../../features/dto/exercise.model';
import { ExerciseService } from '../../../../features/services/exercise.service';

type FilterValue =
  | 'abs'
  | 'back'
  | 'biceps'
  | 'calves'
  | 'cardio'
  | 'chest'
  | 'neck'
  | 'legs'
  | 'shoulders'
  | 'triceps'
  | null;

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.scss',
  providers: [MessageService],
})
export class ExerciseListComponent implements OnInit {
  public exercises: Exercise[] = [];
  public selectedExercise: Exercise = {} as Exercise;
  public displayedExercises: Exercise[] = [];
  public filterMethod: FilterValue = null;
  public filterOptions: SelectItem[] = [];
  public searchValue: string = '';
  public sortOptions: SelectItem[] = [];
  public sortField: string = '';
  public totalRecords: number = this.exercises.length;

  public deleteExerciseDialog: boolean = false;

  public constructor(
    private exerciseService: ExerciseService,
    private messageService: MessageService,
  ) {}

  public ngOnInit(): void {
    this.getExercises();

    this.sortOptions = [
      { label: 'Newest', value: '!createdAt' },
      { label: 'Oldest', value: 'createdAt' },
      { label: 'Name ascending', value: 'name' },
      { label: 'Name descending', value: '!name' },
    ];

    this.filterOptions = [
      { label: 'All', value: null },
      { label: 'Abs', value: 'abs' },
      { label: 'Back', value: 'back' },
      { label: 'Biceps', value: 'biceps' },
      { label: 'Calves', value: 'calves' },
      { label: 'Cardio', value: 'cardio' },
      { label: 'Chest', value: 'chest' },
      { label: 'Neck', value: 'neck' },
      { label: 'Legs', value: 'legs' },
      { label: 'Shoulders', value: 'shoulders' },
      { label: 'Triceps', value: 'triceps' },
    ];
  }

  public getExercises(): void {
    this.exerciseService.getExercises().subscribe((exercises: Exercise[]) => {
      this.exercises = exercises;
      this.displayedExercises = exercises;
      this.totalRecords = exercises.length;
    });
  }

  public deleteExercise(exercise: Exercise): void {
    this.selectedExercise = { ...exercise };
    this.deleteExerciseDialog = true;
  }

  public confirmDelete(): void {
    this.exerciseService
      .deleteExercise(this.selectedExercise._id)
      .subscribe(() => {
        this.getExercises();
        this.deleteExerciseDialog = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Exercise Deleted',
          life: 3000,
        });
      });
  }

  public onSort(value: string): void {
    if (value && value.startsWith('!')) {
      this.sortField = value.substring(1);

      this.displayedExercises = [
        ...this.displayedExercises.sort((a: Exercise, b: Exercise) => {
          if (
            a[this.sortField as keyof Exercise] >
            b[this.sortField as keyof Exercise]
          ) {
            return -1;
          } else if (
            a[this.sortField as keyof Exercise] <
            b[this.sortField as keyof Exercise]
          ) {
            return 1;
          }

          return 0;
        }),
      ];
    } else if (value) {
      this.sortField = value;

      this.displayedExercises = [
        ...this.displayedExercises.sort((a: Exercise, b: Exercise) => {
          if (
            a[this.sortField as keyof Exercise] >
            b[this.sortField as keyof Exercise]
          ) {
            return 1;
          } else if (
            a[this.sortField as keyof Exercise] <
            b[this.sortField as keyof Exercise]
          ) {
            return -1;
          }

          return 0;
        }),
      ];
    } else {
      this.displayedExercises.sort((a: Exercise, b: Exercise) => {
        if (a._id > b._id) {
          return -1;
        } else if (a._id < b._id) {
          return 1;
        }

        return 0;
      });
    }
  }

  public onFilter(value: FilterValue): void {
    this.filterMethod = value;

    this.displayedExercises = this.exercises.filter((exercise: Exercise) => {
      if (!this.filterMethod) {
        return true;
      }

      return exercise.bodyPart === this.filterMethod;
    });

    this.onSort(this.sortField);

    this.totalRecords = this.displayedExercises.length;
  }

  public onSearch(value: string): void {
    this.onSort(this.sortField);
    if (value) {
      this.displayedExercises = this.exercises;
      this.searchValue = value;
      this.totalRecords = this.displayedExercises.length;
    } else {
      this.searchValue = '';
      this.totalRecords = this.exercises.length;
      this.onFilter(this.filterMethod);
    }
  }
}
