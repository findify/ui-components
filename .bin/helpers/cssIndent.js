import path from 'path';
import { decamelize } from 'humps';

const mapper = {
  widgets: 'widget',
  internals: 'block'
}

export const getLocalIdent = (loaderContext, _, localName) => {
	const rootDir = path.join(loaderContext.options.context, 'src');
	const sourcePath = path
    .relative(rootDir, loaderContext.resourcePath)
    .split('/')
    .slice(0, -1)
    .map(element => mapper[element] || element)
    .join('-');

	return `findify-${decamelize(sourcePath, { separator: '-' })}__${localName}`
};
