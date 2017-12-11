import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('First test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say a message', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML)
      .to
      .equal("JavaScript Starter Project - served by Node Express Webserver!");
      done();
      window.close();
    });
  });
});

describe('index.html', () => {
  it('should have h2 that says Quibbles', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h2 = window.document.getElementsByTagName('h2')[0];
      expect(h2.innerHTML)
      .to
      .equal("Quibbles");
      done();
      window.close();
    });
  });
});
