const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Carregue a configuração padrão primeiro
const defaultConfig = getDefaultConfig(__dirname);

// Configuração para SVG
const svgConfig = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
};

// Configuração para Lottie
const lottieConfig = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'lottie'],
  },
};

// Combine as configurações
const combinedConfig = mergeConfig(
  mergeConfig(defaultConfig, svgConfig),
  lottieConfig,
);

module.exports = combinedConfig;
