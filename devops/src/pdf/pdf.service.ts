import { Injectable } from '@nestjs/common';
import { PDFDocument, rgb } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  async createPdf(): Promise<Buffer> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    page.drawText('Hello World!', {
      x: 50,
      y: 350,
      size: 30,
      color: rgb(0, 0.53, 0.71),
    });

    // Correct image path resolution
    const imagePath = path.resolve(
      __dirname,
      '..',
      '..',
      'assets',
      'image.png',
    );
    const imageBytes = fs.readFileSync(imagePath);
    const image = await pdfDoc.embedPng(imageBytes);
    page.drawImage(image, {
      x: 50,
      y: 200,
      width: 500,
      height: 200,
    });

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  }
}
