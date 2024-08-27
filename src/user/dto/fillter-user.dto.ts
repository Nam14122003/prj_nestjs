import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class FillterUserDto {
    page: string;
    itemsPerPage: string;

    @ApiProperty({required: false})
    search: string;
}