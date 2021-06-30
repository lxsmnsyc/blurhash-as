/** @jsx h */
import { h, defineComponent } from 'vue';
import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import Hello from '../src';

describe('Example', () => {
  it('should have the expected content', () => {
    const greeting = 'World';

    const Component = defineComponent({
      setup() {
        return () => <Hello greeting={greeting} />;
      }
    });
  
    render(Component);

    expect(screen.getByText(`Hello ${greeting}`)).toBeInTheDocument();
  });
});
