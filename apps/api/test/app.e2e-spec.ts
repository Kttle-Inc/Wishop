import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UsersService } from './../src/users/users.service';

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  const mockUsersService = {
    create: jest.fn(),
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /users', () => {
    it('should create a user', async () => {
      const mockCreateUserDto = {
        first_name: 'John',
        last_name: 'Doe',
      };
      mockUsersService.create.mockResolvedValue(mockCreateUserDto);

      return request(app.getHttpServer())
        .post('/users')
        .send(mockCreateUserDto)
        .expect(201)
        .then((response) => {
          expect(response.body).toEqual(mockCreateUserDto);
        });
    });
  });

  describe('GET /users', () => {
    it('should get all users', async () => {
      const mockUsers = [{ first_name: 'John', last_name: 'Doe' }];
      mockUsersService.findAll.mockResolvedValue(mockUsers);

      return request(app.getHttpServer())
        .get('/users')
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(mockUsers);
        });
    });
  });
});
