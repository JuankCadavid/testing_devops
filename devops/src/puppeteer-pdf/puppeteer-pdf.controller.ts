import { Controller, Get, Res } from '@nestjs/common';
import { PuppeteerPdfService } from './puppeteer-pdf.service';
import { Response } from 'express';

@Controller('puppeteer-pdf')
export class PuppeteerPdfController {
  constructor(private readonly puppeteerPdfService: PuppeteerPdfService) {}

  @Get()
  async getPdf(@Res() res: Response): Promise<void> {
    const pdfBuffer = await this.puppeteerPdfService.createPdf();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': pdfBuffer.length.toString(),
    });
    res.end(pdfBuffer);
  }
}
