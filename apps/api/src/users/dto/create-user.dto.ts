import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @Length(1, 50)
  first_name: string;
  @ApiProperty()
  @IsString()
  @Length(1, 50)
  last_name: string;
}
