import { render } from 'solid-js/web';
import App from './App';
import './index.css';

const app = document.getElementById('root');
if (app) {
  render(
    () => <App />,
    document.getElementById('root'),
  );
}
