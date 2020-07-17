import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({ example: 'admin' })
    username: string;
    @ApiProperty({ example: '123456' })
    password: string;
    @ApiProperty({ example: 'Cowboy' })
    fullname: string;
}