import React from 'react';
import ReactDOM from 'react-dom';
import * as _ from 'lodash';
import { FileUpload } from './file-upload';
import { applyPatch, mergeIPS, isIPS } from './ips-utils';

import './styles.css';

const patchFile = files => {
  const ips = _.find(files, isIPS);
  const [file] = _.xor([ips], files);

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
  return (
    <div className="App">
      <h1>IPSPatcher.js</h1>
      <FileUpload
        callback={files => downloadFile(patchFile(files), 'patched.bin')}
        id="patchFile"
      >
        <label htmlFor="patchFile">
          Click here, then select your IPS and file to patch
        </label>
      </FileUpload>
      <FileUpload
        callback={files => downloadFile(mergeIPS(files), 'merged.ips')}
        id="mergeIPS"
      >
        <label htmlFor="mergeIPS">
          Click here, then select every IPS file to merge
        </label>
      </FileUpload>
      <a id="hidden-download" />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
