import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formDeactivateGuard } from '../../core/guards/form-deactivate.guard';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { ExerciseFormComponent } from './components/exercise-form/exercise-form.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { exerciseResolver } from './resolvers/exercise.resolver';

const routes: Routes = [
  {
    path: '',
    component: ExerciseListComponent,
  },
  {
    path: 'create',
    component: ExerciseFormComponent,
    canDeactivate: [formDeactivateGuard],
  },
  {
    path: 'edit/:id',
    component: ExerciseFormComponent,
    canDeactivate: [formDeactivateGuard],
  },
  {
    path: 'view/:id',
    component: ExerciseDetailsComponent,
    resolve: {
      exercise: exerciseResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseRoutingModule {}
