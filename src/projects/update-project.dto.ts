import { IsOptional } from 'class-validator';

export class UpdateProjectDto {
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly todo: [
    {
      readonly title: string;
      readonly description: string;
      readonly tags: Array<string>;
    },
  ];

  @IsOptional()
  readonly doing: [
    {
      readonly title: string;
      readonly description: string;
      readonly tags: Array<string>;
    },
  ];

  @IsOptional()
  readonly done: [
    {
      readonly title: string;
      readonly description: string;
      readonly tags: Array<string>;
    },
  ];

  @IsOptional()
  readonly completedAt: Date;

  readonly updatedAt: Date;
}
