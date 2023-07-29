import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BookEntity } from './book.entity';
import { Book } from './book.interface';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>
  ) {}

  createBook(book: Book): Observable<Book> {
    return from(this.bookRepository.save(book));
  }

  findAllBooks(): Observable<Book[]> {
    return from(this.bookRepository.find());
  }

  findBook(id: number): Observable<Book> {
    return from(this.bookRepository.findOneBy({ id }));
  }

  updateBook(id: number, book: Book): Observable<UpdateResult> {
    return from(this.bookRepository.update(id, book));
  }

  deleteBook(id: number): Observable<DeleteResult> {
    return from(this.bookRepository.delete(id));
  }
}
