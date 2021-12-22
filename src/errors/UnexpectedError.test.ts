import { UnexpectedError } from '@/errors/UnexpectedError';

describe(UnexpectedError, () => {
  it('is instance of himself', () => {
    const error = new UnexpectedError();

    expect(error).toBeInstanceOf(UnexpectedError);
    expect(UnexpectedError.is(error)).toBe(true);
  });

  it('accepts a raw error', () => {
    const rawError = new Error('raw');
    const error = new UnexpectedError(rawError);

    expect(error.mainError).toEqual(rawError);
    expect(error?.mainError?.message).toEqual(rawError.message);
  });

  it('has a message', () => {
    const error = new UnexpectedError();

    expect(error.message).toEqual(UnexpectedError.props.message);
  });
});
