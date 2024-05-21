import { Module } from '@nestjs/common';
import { PuppeteerPdfService } from './puppeteer-pdf.service';
import { PuppeteerPdfController } from './puppeteer-pdf.controller';

@Module({
  providers: [PuppeteerPdfService],
  controllers: [PuppeteerPdfController],
})
export class PuppeteerPdfModule {}
