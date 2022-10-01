import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuoteDto } from './create-quote.dto';
import { Quote, QuoteDocument } from './quote.schema';
import { UpdateQuoteDto } from './update-quote.dto';

@Injectable()
export class QuotesService {
  constructor(
    @InjectModel(Quote.name)
    private readonly quoteModel: Model<QuoteDocument>,
  ) {}

  async create(createQuoteDto: CreateQuoteDto): Promise<Quote> {
    const createdQuote = await this.quoteModel.create(createQuoteDto);
    return createdQuote;
  }

  async update(id: string, updateData: UpdateQuoteDto) {
    const updatedQuote = await this.quoteModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate(['quote', 'author']);
    return updatedQuote;
  }

  async findAll(): Promise<Quote[]> {
    return this.quoteModel.find().exec();
  }

  async findOne(id: string): Promise<Quote> {
    return this.quoteModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedQuote = await this.quoteModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedQuote;
  }
}
