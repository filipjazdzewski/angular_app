import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from '../../shared/shared.module';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { ExerciseFormComponent } from './components/exercise-form/exercise-form.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { ExerciseSearchPipe } from './pipes/exercise-search.pipe';

@NgModule({
  declarations: [
    ExerciseListComponent,
    ExerciseFormComponent,
    ExerciseSearchPipe,
    ExerciseDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    DataViewModule,
    DropdownModule,
    ImageModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputGroupModule,
    TagModule,
    DialogModule,
    PanelModule,
    CardModule,
    ToastModule,
    TooltipModule,
  ],
})
export class ExerciseModule {}
