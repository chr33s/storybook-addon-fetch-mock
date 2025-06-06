import type {
  MockMatcher,
  MockOptions,
  MockResponse,
  MockResponseFunction,
} from 'fetch-mock';

interface MockObject {
  matcher: MockMatcher | MockOptions;
  response?: MockResponse | MockResponseFunction;
  options?: MockOptions;
}

type MockArray = [
  MockMatcher | MockOptions,
  (MockResponse | MockResponseFunction)?,
  MockOptions?,
];

type Mock = MockObject | MockArray;
