import type webpack from 'webpack';
import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import type { IBuildOptions } from './types/config';
import buildDevServer from './buildDevServer';

export default function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
  const {
    mode, paths, isDev, port,
  } = options;

  return {
    mode,
    entry: paths.entry,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
