/* @jsx h */
import { h, VNode } from 'preact';

export interface HelloProps {
  greeting: string;
}

export default function Hello({ greeting }: HelloProps): VNode {
  if (process.env.NODE_ENV !== 'production') {
    console.log('This code would not appear on production builds');
  }
  return <h1>{`Hello ${greeting}`}</h1>;
}
