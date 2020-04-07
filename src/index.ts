import schema1 from './schema1.json';
import schema2 from './schema2.json';

const example1: [ { foo: number; bar: number }, { baz: string; } ] = schema1;
const example2: [ number, string ] = schema2;

const schema3: [ { foo: number; bar: number }, { baz: string; } ] = [
  {
    foo: 1,
    bar: 2
  },
  {
    baz: 'something'
  }
];

const example3: ({ foo: number; bar: number; } | { baz: string })[] = schema3;