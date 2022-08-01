module.exports = {
  apps: [
    {
      name: 'node-web-app', // 项目名
      script: './server.js', // 执行文件
      watch: '.',
      autorestart: true, // 出错自动重启
      exec_mode: 'cluster', // 应用启动模式，支持fork和cluster模式
      instances: 2, // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
      max_memory_restart: '800M', // 最大内存限制数，超出自动重启
      error_file: 'logs/node-web-app-err.log', // 错误日志文件
      out_file: 'logs/node-web-app-out.log', // 正常日志文件
      merge_logs: true, // 设置追加日志而不是新建日志
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // 指定日志文件的时间格式
      min_uptime: '60s', // 应用运行少于时间被认为是异常启动
      max_restarts: 30, // 最大异常重启次数，即小于min_uptime运行时间重启次数
      restart_delay: 60, // 异常重启情况下，延时重启时间
      ignore_watch: [ // 不用监听的文件
        'node_modules',
        'logs',
      ],
    },
  ],
  // deploy: {
  //   production: {
  //     user: 'SSH_USERNAME',
  //     host: 'SSH_HOSTMACHINE',
  //     ref: 'origin/master',
  //     repo: 'GIT_REPOSITORY',
  //     path: 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': '',
  //   },
  // },
}
