import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class User {
  @IsNotEmpty()
  @IsString()
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;
}
