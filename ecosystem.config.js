module.exports = {
  apps: [
    {
      name: 'PET FEEDER',
      script: 'src/index.js',
      exec_mode: 'fork',
      instances: 1,
      max_memory_restart: '200M',
    },
  ],
};
