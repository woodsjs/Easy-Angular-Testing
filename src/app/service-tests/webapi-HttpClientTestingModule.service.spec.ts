import { TestBed } from '@angular/core/testing';

import { WebapiService } from './webapi.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http';

describe('Service Tests - WebapiService with HttpClientTestingModule', () => {
  let service: WebapiService;
  let backend: HttpTestingController;

  const expectedURL = 'https://jsonplaceholder.typicode.com/todos/';

  const mockTodoData = {
    userId: 999,
    id: 999,
    title: 'Test this thing',
    completed: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebapiService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.get(WebapiService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the expected URL', () => {
    // expectOne returns our mock as a TestRequest object,
    // so let's save that and we can use it later!
    service.getAllTodos().subscribe();
    const httpCall: TestRequest = backend.expectOne(
      expectedURL,
      'Saving to a const'
    );
    // for stuff like this
    expect(httpCall.request.url).toBe(expectedURL);
    // console.log(httpCall);

    backend.verify();
  });

  it('should call the expected URL and method and test the explicit params', () => {
    // One overloaded method of expectOne - we can specify what params we expect
    service.getAllTodos().subscribe();
    backend.expectOne(
      { url: expectedURL, method: 'GET' },
      'We want these explicit params to be in our mock call'
    );

    backend.verify();
  });

  it('should call the expected URL and test using a function', () => {
    // we can also overload with a function
    service.getAllTodos().subscribe();
    backend.expectOne((request: HttpRequest<any>) => {
      // we should probably do something more fun here
      return request.method === 'GET';
    }, 'This is for our function call');

    backend.verify();
  });

  it('should flush the response with our test data', () => {
    // if we do some processing in our service,
    // we can flush the expect call with our mocked data, errors, or other things
    // to test how we handle this
    service.getAllTodos().subscribe();
    backend.expectOne(expectedURL).flush(mockTodoData);

    backend.verify();
  });

  it('should flush with an error', () => {
    // if we do some processing in our service,
    // we can flush the expect call with our mocked data, errors, or other things
    // to test how we handle this
    const errorStatusText = 'Danger Will Robinson!';

    service.getAllTodos().subscribe(
      response => {
        throw('Nope, not on my watch!');
      },
      error => {
        expect(error.status).toEqual(400);
        expect(error.statusText).toEqual(errorStatusText);
      }
    );
    backend
      .expectOne(expectedURL)
      .flush(mockTodoData, {
        status: 400,
        statusText: errorStatusText
      });

    backend.verify();
  });
});
