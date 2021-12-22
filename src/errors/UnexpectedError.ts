export class UnexpectedError extends Error {
  readonly mainError: Error | undefined;

  constructor(mainError?: Error) {
    super(UnexpectedError.props.message);
    this.name = UnexpectedError.props.name;
    this.mainError = mainError;
  }

  static readonly props = {
    name: 'UnexpectedError',
    message: 'An Unexpected error happened',
  };

  static is(error: any) {
    return error instanceof UnexpectedError;
  }
}
