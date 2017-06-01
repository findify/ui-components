import * as React from 'react';
import { map } from 'lodash';
import {
  compose,
  defaultProps,
  lifecycle,
  onlyUpdateForKeys,
  pure,
  withHandlers,
  withPropsOnChange,
  withState
} from 'recompose';

const canvas: any = document.createElement('canvas').getContext('2d');
const divElement = document.createElement('div');
const spanElement = document.createElement('div');
const ellipsis = {};

const getEllipsis = text => {
  if (ellipsis[text]) return ellipsis[text];
  const span:any = spanElement.cloneNode();
  span.style.position = 'fixed';
  span.style.visibility = 'hidden';
  span.style.top = 0;
  span.innerHTML = text;
  document.body.appendChild(span);
  ellipsis[text] = span;
  return span;
}

const measureWidth = text => canvas.measureText(text).width;

const calcTargetWidth = (target, update, callback?) => {
  if (!target) return;
  const targetWidth = target.parentNode.getBoundingClientRect().width;
  
  if (!targetWidth) {
      return requestAnimationFrame(() => calcTargetWidth(target, update, callback));
  }
  const style = window.getComputedStyle(target);
  const font = [
      style['font-weight'],
      style['font-style'],
      style['font-size'],
      style['font-family']
  ].join(' ');
  canvas.font = font;
  update(targetWidth, callback);
}

const getEllipsisWidth = node => node.offsetWidth;

const computeLines = (ellipsis: string, numLines, targetWidth, text) => {
  const lines: any = [];
  const textLines = text.split('\n').map(line => line.split(' '));
  const ellipsisWidth = getEllipsisWidth(getEllipsis(ellipsis));

  for (let line = 1; line <= numLines; line++) {
    const textWords = textLines[0];

    if (textWords.length === 0) {
      lines.push();
      textLines.shift();
      line--;
      continue;
    }

    let resultLine = textWords.join(' ');

    if (measureWidth(resultLine) <= targetWidth && textLines.length === 1) {
      lines.push(resultLine);
      break;
    }

    if (line === numLines) {
      // Binary search determining the longest possible line inluding truncate string
      const textRest = textWords.join(' ');

      let lower = 0;
      let upper = textRest.length - 1;

      while (lower <= upper) {
        const middle = Math.floor((lower + upper) / 2);

        const testLine = textRest.slice(0, middle + 1);

        if (measureWidth(testLine) + ellipsisWidth <= targetWidth) {
          lower = middle + 1;
        } else {
          upper = middle - 1;
        }
      }
      resultLine = textRest.slice(0, lower) + ellipsis;

    } else {
      // Binary search determining when the line breaks
      let lower = 0;
      let upper = textWords.length - 1;

      while (lower <= upper) {
        const middle = Math.floor((lower + upper) / 2);

        const testLine = textWords.slice(0, middle + 1).join(' ');

        if (measureWidth(testLine) <= targetWidth) {
          lower = middle + 1;
        } else {
          upper = middle - 1;
        }
      }

      // The first word of this line is too long to fit it
      if (lower === 0) {
        // Jump to processing of last line
        line = numLines - 1;
        continue;
      }

      resultLine = textWords.slice(0, lower).join(' ');
      textLines[0].splice(0, lower);
    }

    lines.push(resultLine);
  }

  return lines;
}

const renderLine = (line, i, arr) => {
  if (i === arr.length - 1) return `<span>${line}</span>`;
  if (line) return `<span>${line}</span><br />`;
  return '<br />';
}

export default compose<any, Props>(
  pure,
  defaultProps({ children: '', ellipsis: '…', lines: 1 }),
  withState('target', 'setTarget', void 0),
  withState('width', 'setWidth', 0),
  withHandlers({
    onResize: ({ target, setWidth }) => () => calcTargetWidth(target, setWidth),
    getLines: ({ ellipsis, lines, width, children }) => () => computeLines(ellipsis, lines, width, children),
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.onResize);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.onResize);
    },
    componentWillReceiveProps(next) {
      if (next.target !== this.props.target) this.props.onResize();
    }
  }),
  withPropsOnChange(['target', 'width'], ({ target, width, getLines, children }) => ({
    content: target && width && map(getLines(), renderLine).join('')
  })),
  onlyUpdateForKeys(['content'])
)(({
  content,
  children,
  ellipsis,
  setTarget,
  setText,
  text,
  target
}) =>(
  <span ref={r => !target && r && setTarget(r)}>
  {
    content
    && <span dangerouslySetInnerHTML={{ __html: content }}/>
    || <span>{children}</span>
  }
  </span>
));

type Props = {
  lines?: number,
  children?: any
}
