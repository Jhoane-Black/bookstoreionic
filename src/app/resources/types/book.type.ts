import {AuthorType} from "@Resources/types/author.type";

export interface BookType {
    book_id: number;
    book_title: String;
    book_editorial: String;
    book_saga: String;
    book_price: number;
    book_price_dis: number;
    authors?: AuthorType[];
}