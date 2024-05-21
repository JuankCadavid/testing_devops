import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import * as path from 'path';

@Injectable()
export class PuppeteerPdfService {
  async createPdf(): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`
      <html>
        <body>
          <h1>Hello, world!</h1>
          <p>This is a PDF generated using Puppeteer in NestJS.</p>
          <img src="file://${path.resolve(__dirname, '..', '..', 'assets', 'image.png')}" alt="Image">
        </body>
      </html>
    `);
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdfBuffer;
  }
}
