import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

describe('Users Controller', () => {
  let controller: UsersController;
  let service: UsersService;
  const createUserDto: CreateUserDto = {
    first_name: 'AA',
    last_name: 'BB',
  };

  const mockUser = {
    first_name: 'AA',
    last_name: 'BB',
    _id: 'a id',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                first_name: 'AA',
                last_name: 'BB',
              },
              {
                first_name: 'CC',
                last_name: 'DD',
              },
              {
                first_name: 'EE',
                last_name: 'FF',
              },
            ]),
            create: jest.fn().mockResolvedValue(createUserDto),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('create()', () => {
    it('should create a new user', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockUser);

      await controller.create(createUserDto);
      expect(createSpy).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of users', async () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          first_name: 'AA',
          last_name: 'BB',
        },
        {
          first_name: 'CC',
          last_name: 'DD',
        },
        {
          first_name: 'EE',
          last_name: 'FF',
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
