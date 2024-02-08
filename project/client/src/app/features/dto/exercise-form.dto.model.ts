import { SetFormDto } from './set-form.dto.model';

export interface ExerciseFormDto {
  readonly name?: string | null;
  readonly description?: string | null;
  readonly equipment?: string | null;
  readonly bodyPart?: string | null;
  readonly sets?: SetFormDto[];
}
