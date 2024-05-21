import { Test, TestingModule } from '@nestjs/testing';
import { PuppeteerPdfController } from './puppeteer-pdf.controller';

describe('PuppeteerPdfController', () => {
  let controller: PuppeteerPdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuppeteerPdfController],
    }).compile();

    controller = module.get<PuppeteerPdfController>(PuppeteerPdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
