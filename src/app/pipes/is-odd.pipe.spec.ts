import { IsOddPipe } from './is-odd.pipe';

describe('IsOddPipe', () => {
  it('create an instance', () => {
    const pipe = new IsOddPipe();
    expect(pipe).toBeTruthy();
  });
});
