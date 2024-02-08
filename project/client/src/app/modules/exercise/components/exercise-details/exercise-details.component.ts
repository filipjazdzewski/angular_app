import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../../../../features/dto/exercise.model';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.scss',
})
export class ExerciseDetailsComponent implements OnInit {
  public exercise!: Exercise;

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.exercise = this.route.snapshot.data['exercise'];
  }
}
