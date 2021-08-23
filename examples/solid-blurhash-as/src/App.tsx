import { createSignal } from 'solid-js';
import * as blurhash from 'blurhash-as/browser';
import wasmURL from 'blurhash-as/build/optimized.wasm?url';
import BasicDemo from './BasicDemo';
import StaticDemo from './StaticDemo';

blurhash.setURL(wasmURL);

export default function App(): JSX.Element {
  const [isStatic, setStatic] = createSignal(true);
  return (
    <div className="page">
      <div className="container">
        <button
          type="button"
          onClick={() => {
            setStatic(!isStatic());
          }}
        >
          {`Switch to ${isStatic() ? 'Basic' : 'Static'} Mode`}
        </button>
        <p>
          In static mode, hash and placeholder are generated during compile-time.
          Therefore, there is no decoding processes that takes place on the user-side.
        </p>
        {
          isStatic()
            ? <StaticDemo />
            : <BasicDemo />
        }
      </div>
    </div>
  );
}
