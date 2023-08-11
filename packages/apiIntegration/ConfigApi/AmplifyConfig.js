export const AmplifyConfig = {
    configs: {},
  
    addConfig: function(key, config) {
      this.configs[key] = config;
    },
  
    getConfig: function(key) {
      return this.configs[key];
    },
  };
  