import type webpack from 'webpack';
import type { IBuildOptions } from './types/config';

export default function buildResolvers(options: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    alias: {},
    mainFiles: ['index'],
    modules: [options.paths.src, 'node_modules'],
  };
}
