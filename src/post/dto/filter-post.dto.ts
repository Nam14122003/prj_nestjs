import { ApiProperty } from "@nestjs/swagger";

export class FilterPostDto {
    @ApiProperty()
    page: string;

    @ApiProperty()
    itemPerPage: string;

    @ApiProperty({required: false})
    search: string;

    @ApiProperty()
    category: string;
}