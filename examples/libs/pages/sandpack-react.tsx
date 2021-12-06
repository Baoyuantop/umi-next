import { Sandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';

const APP_CODE = `
import { sum } from 'lodash';

export default function App() {
  return <>
    <h1>Hello Sandpack!</h1>
    <h2>{sum([2, 3])}</h2>
  </>
}
`.trim();

export default function App() {
  return (
    <Sandpack
      customSetup={{
        dependencies: {
          lodash: 'latest',
        },
        files: {
          '/App.js': {
            code: APP_CODE,
          },
        },
      }}
      template="react"
    />
  );
}