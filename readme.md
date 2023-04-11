# newrelic browser import repro

1. Run `npm install` to install all dependencies
2. Run `npm run build` to build 
3. Note the error:
```
🚨 Build failed.

@parcel/core: Failed to resolve '@newrelic/browser-agent/loaders/browser-agent' from './src/index.tsx'

  /workspaces/nr-browser-test/src/index.tsx:3:30
    2 | import { App } from "./App";
  > 3 | import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
```