import { Test, TestingModule } from '@nestjs/testing';
import { DefensesController } from './defenses.controller';
import { DefensesService } from './defenses.service';

describe('DefensesController', () => {
  let controller: DefensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefensesController],
      providers: [DefensesService],
    }).compile();

    controller = module.get<DefensesController>(DefensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
