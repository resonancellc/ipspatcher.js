import React, { Component } from 'react';

export class FileUpload extends Component {
  /**
   * @param {string} props.id The id of the component
   * @param {Function} props.onChange The callback for handling a file
   * @param {any} props.children What to render for the upload component
   */
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.promiseAll = this.promiseAll.bind(this);
  }

  readFile(file, callback) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(new Buffer(reader.result));
      };

      reader.onerror = err => {
        reject(err);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  promiseAll(promiseArr) {
    const [head, ...tail] = promiseArr;
    return head.then(res => {
      return Promise.all(tail).then(results => [res, ...results]);
    });
  }

  handleInput(event) {
    const files = event.target.files;
    const promises = Array.from(files).map(this.readFile);

    this.promiseAll(promises).then(this.props.callback);
  }

  render() {
    return (
      <div>
        {this.props.children || <label htmlFor={this.props.id}>Upload</label>}
        <input
          onChange={this.handleInput}
          type="file"
          id={this.props.id}
          style={{ display: 'none' }}
          value={''}
          multiple
        />
      </div>
    );
  }
}
