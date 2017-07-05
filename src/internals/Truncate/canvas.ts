import FontFaceObserver from 'fontfaceobserver';

const divElement = document.createElement('div');
const spanElement = document.createElement('div');
const ellipsis = {};
const fontObservers = {};

const getFont = font => {
  if (fontObservers[font]) return fontObservers[font];
  fontObservers[font] = new FontFaceObserver(font).load();
  return fontObservers[font];
}

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

const getEllipsisWidth = node => node.offsetWidth;

export class Canvas {
  canvas: any = void 0;
  targetWidth: 0;

  constructor() {
    this.canvas = document.createElement('canvas').getContext('2d');
  }

  measureWidth(text){
    return this.canvas.measureText(text).width;
  }

  setTarget(target, callback) {
    if (!target) return;
    const style = window.getComputedStyle(target);
    const font = [
        style['font-weight'],
        style['font-style'],
        style['font-size'],
        style['font-family']
    ].join(' ');
    
    this.canvas.font = font;
    const pureFontName = style['font-family'].replace(/\"/g, '').split(',')[0];
    getFont(pureFontName).then(callback);
  }

  setTargetWidth(target, callback) {
    if (!target) return;
    const targetWidth = target.parentNode.getBoundingClientRect().width;
    
    if (!targetWidth) {
      return requestAnimationFrame(() => this.setTargetWidth(target, callback));
    }
 
    this.targetWidth = targetWidth;
    return callback(targetWidth);
  }

  computeLines(ellipsis: string, numLines, text) {
    const lines: any = [];
    const textLines = text.split('\n').map(line => line.replace(/\s\s+/g, ' ').split(' '));
    const ellipsisWidth = getEllipsisWidth(getEllipsis(ellipsis));
    const targetWidth =  this.targetWidth - 1;
    for (let line = 1; line <= numLines; line++) {
      const textWords = textLines[0];

      if (textWords.length === 0) {
        lines.push();
        textLines.shift();
        line--;
        continue;
      }

      let resultLine = textWords.join(' ');

      if (this.measureWidth(resultLine) <= targetWidth && textLines.length === 1) {
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

          if (this.measureWidth(testLine) + ellipsisWidth <= targetWidth) {
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

          if (this.measureWidth(testLine) <= targetWidth) {
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

}
