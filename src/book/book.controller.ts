import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Book } from './book.interface';
import { BookService } from './book.service';

type NewType = Book;

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  create(@Body() book: Book): Observable<NewType> {
    return this.bookService.createBook(book);
  }

  @Get()
  findAll(): Observable<Book[]> {
    return this.bookService.findAllBooks();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() book: Book,
  ): Observable<UpdateResult> {
    return this.bookService.updateBook(id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.bookService.deleteBook(id);
  }
}
