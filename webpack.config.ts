import path from 'path';
import type webpack from 'webpack';
import type { IBuildEnv, IBuildPaths } from './config/build/types/config';
import buildWebpackConfig from './config/build/buildWebpackConfig';

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    paths, mode, isDev, port,
  });

  return config;
};
