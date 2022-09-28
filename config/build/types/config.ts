export type BuildMode = 'development' | 'production';

export type IBuildEnv = {
  mode: BuildMode;
  port: number;
};

export type IBuildPaths = {
  entry: string;
  output: string;
  html: string;
  src: string;
};

export type IBuildOptions = {
  paths: IBuildPaths;
  mode: BuildMode;
  isDev: boolean;
  port: number;
};
