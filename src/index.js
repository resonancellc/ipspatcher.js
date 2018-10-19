import React from 'react';
import ReactDOM from 'react-dom';
import * as _ from 'lodash';
import { FileUpload } from './file-upload';
import { StyledButton } from './styled-button';
import { applyPatch, mergeIPS, isIPS } from './ips-utils';
import { clickElementById } from './utils';

import './styles.css';

const patchFile = files => {
  const file = _.find(files, file => !isIPS(file));
  const patches = _.xor([ips], files);
  const ips = mergeIPS(patches);

  return applyPatch(file, ips);
};

const createDownloadURL = buffer => {
  const blob = new Blob([buffer]);
  return window.URL.createObjectURL(blob);
};

const downloadFile = (buffer, name) => {
  const downloadTag = document.getElementById('hidden-download');

  downloadTag.href = createDownloadURL(buffer);
  downloadTag.download = name;
  downloadTag.click();
};

const App = () => {
  const patchId = 'patchFile';
  const mergeId = 'mergeFile';

  return (
    <div className="App">
      <h1>IPSPatcher.js</h1>
      <FileUpload
        callback={files => downloadFile(patchFile(files), 'patched.bin')}
        id={patchId}
      >
        <StyledButton onClick={() => clickElementById(patchId)}>
          Patch (Upload IPSs and the file to patch)
        </StyledButton>
      </FileUpload>
      <FileUpload
        callback={files => downloadFile(mergeIPS(files), 'merged.ips')}
        id={mergeId}
      >
        <StyledButton onClick={() => clickElementById(mergeId)}>
          Merge (Upload IPSs)
        </StyledButton>
      </FileUpload>
      <a id="hidden-download" />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
