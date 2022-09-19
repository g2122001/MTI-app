const isOnCloud9 = process.env.C9_PID !== undefined;

const devServerConfig = isOnCloud9? 
    {
      client: {
        webSocketURL: {
          hostname: `${process.env.C9_PID}.vfs.cloud9.ap-northeast-1.amazonaws.com`,
          protocol: 'wss',
        }
      }
    }
    :{};

module.exports = {
    publicPath: "./",
    devServer: devServerConfig
}