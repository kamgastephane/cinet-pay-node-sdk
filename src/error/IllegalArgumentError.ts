export class IllegalArgumentError extends Error{
  constructor(name: string, value: string) {
    super(`parameter ${name} with value ${value} is invalid`);
  }
}
