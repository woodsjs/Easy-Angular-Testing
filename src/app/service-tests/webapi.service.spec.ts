import { WebapiService } from './webapi.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('Service Tests - WebapiService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: WebapiService;
  const URL = 'https://jsonplaceholder.typicode.com/todos/';

  const mockTodoData = {
    userId: 999,
    id: 999,
    title: 'Test this thing',
    completed: false
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WebapiService(httpClientSpy);

    httpClientSpy.get.and.returnValue(of(mockTodoData));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return our single hero with a #get call', () => {
    const todos = service.getAllTodos();
    todos.subscribe(data => {
      expect(data).toEqual(mockTodoData);
    });
  });

  it('should only call the service one time per request', () => {
    service.getAllTodos();
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should call the expected URL', () => {
    service.getAllTodos();
    expect(httpClientSpy.get.calls.allArgs()[0][0]).toEqual(URL);
  });
});
