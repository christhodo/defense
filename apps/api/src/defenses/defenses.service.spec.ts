import { Test, TestingModule } from '@nestjs/testing';
import { DefensesService } from './defenses.service';

describe('DefensesService', () => {
  let service: DefensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefensesService],
    }).compile();

    service = module.get<DefensesService>(DefensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
