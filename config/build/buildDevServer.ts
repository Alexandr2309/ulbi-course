import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { IBuildOptions } from './types/config';

export default function buildDevServer({ port }: IBuildOptions): DevServerConfiguration {
  return {
    port,
    hot: true,
    open: true,
    historyApiFallback: true,
  };
}
