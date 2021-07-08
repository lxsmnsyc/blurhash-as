/* @jsx h */
import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import '@testing-library/jest-dom';
import Hello from '../src';

describe('Example', () => {
  it('should have the expected content', () => {
    const greeting = 'World';
    render(<Hello greeting={greeting} />);

    expect(screen.getByText(`Hello ${greeting}`)).toBeInTheDocument();
  });
});
