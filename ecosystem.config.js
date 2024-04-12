module.exports = {
  apps: [
    {
      name: "deploy-nextjs",
      cwd: "./",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "cluster",
      instances: 0,
      autorestart: true,
      watch: true,
      listen_timeout: 20000,
      kill_timeout: 5000,
    },
  ],
};
