import { ApiProperty } from "@nestjs/swagger";

export class FillterUserDto {
    @ApiProperty()
    page: string;

    @ApiProperty()
    itemsPerPage: string;

    @ApiProperty({required: false})
    search: string;
}