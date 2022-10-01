import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './create-quote.dto';
import { Quote } from './quote.schema';
import { UpdateQuoteDto } from './update-quote.dto';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post()
  async create(@Body() createQuoteDto: CreateQuoteDto) {
    await this.quotesService.create(createQuoteDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuoteDto: UpdateQuoteDto,
  ) {
    await this.quotesService.update(id, updateQuoteDto);
  }

  @Get()
  async findAll(): Promise<Quote[]> {
    return this.quotesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Quote> {
    return this.quotesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.quotesService.delete(id);
  }
}
