import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfService } from './pdf/pdf.service';
import { PdfController } from './pdf/pdf.controller';
import { PdfModule } from './pdf/pdf.module';
import { PuppeteerPdfModule } from './puppeteer-pdf/puppeteer-pdf.module';

@Module({
  imports: [PdfModule, PuppeteerPdfModule],
  controllers: [AppController, PdfController],
  providers: [AppService, PdfService],
})
export class AppModule {}
