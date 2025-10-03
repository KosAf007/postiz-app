module.exports = {
  apps: [
    {
      name: "frontend",
      script: "pnpm",
      args: "run start:prod:frontend",
      cwd: "./apps/frontend",
      env: { NODE_ENV: "production", PORT: "3000" }
    },
    {
      name: "backend",
      script: "pnpm",
      args: "run start:prod:backend",
      cwd: "./apps/backend",
      env: { NODE_ENV: "production", PORT: "5000" }
    },
    {
      name: "workers",
      script: "pnpm",
      args: "run start:prod:workers",
      cwd: "./apps/workers",
      env: { NODE_ENV: "production" }
    },
    {
      name: "cron",
      script: "pnpm",
      args: "run start:prod:cron",
      cwd: "./apps/cron",
      env: { NODE_ENV: "production" }
    }
  ]
};
