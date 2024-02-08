/* eslint-disable @typescript-eslint/naming-convention */
export interface Exercise {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly equipment: string;
  readonly bodyPart: string;
  readonly sets: {
    readonly reps: number;
  }[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
