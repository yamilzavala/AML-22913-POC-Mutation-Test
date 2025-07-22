import { 
  fetchUser, 
  //fetchAllUsers 
} from './users';

describe('users API functions', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('fetchUser calls correct endpoint and returns user data', async () => {
    const mockUser = { id: 1, name: 'John' };
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockUser),
    });

    const result = await fetchUser(1);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/api/user/1');
    expect(result).toEqual(mockUser);
  });

  // ❌ Intentional forced error for demonstration purposes
  // test('fetchAllUsers calls correct endpoint and returns all users data', async () => {
  //   const mockUsers = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  //   global.fetch.mockResolvedValueOnce({
  //     json: jest.fn().mockResolvedValueOnce(mockUsers),
  //   });

  //   const result = await fetchAllUsers();

  //   expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/api/users');
  //   expect(result).toEqual(mockUsers);
  // });
});
