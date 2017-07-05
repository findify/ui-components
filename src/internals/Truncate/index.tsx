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

import { Canvas } from './canvas';

const renderLine = (line, i, arr) => {
  if (i === arr.length - 1) return `<span>${line}</span>`;
  if (line) return `<span>${line}</span><br />`;
  return '<br />';
}


export default compose<any, Props>(
  pure,
  defaultProps({
    children: '',
    ellipsis: '…',
    lines: 1,
    canvas: new Canvas()
  }),
  withState('target', 'setTarget', void 0),
  withState('width', 'setWidth', 0),
  withHandlers({
    onResize: ({ target, canvas, setWidth }) => () => canvas.setTargetWidth(target, setWidth),
    getLines: ({ ellipsis, lines, children, canvas }) => () => canvas.computeLines(ellipsis, lines, children),
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.onResize);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.onResize);
    },
    componentWillReceiveProps(next) {
      if (next.target !== this.props.target) {
        this.props.canvas.setTarget(next.target, next.onResize);
      }
    }
  }),
  withPropsOnChange(['target', 'width'], ({ target, width, getLines, children }) => ({
    content: target && map(getLines(), renderLine).join('')
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
