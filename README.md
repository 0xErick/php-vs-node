####需要四台服务器
* ab 命令运行服务器
* node-http-api 服务器
* php-http-api  服务器
* slow-io  模拟服务器


####四台的服务器配置
vultr VC2 4cpu 8GB 内存


#### slow-io 模拟服务器 配置
1. 安装 node.js
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

2. 安装 pm2
npm install -g pm2

3. 拉取代码 git clone https://github.com/saqing/php-vs-node.git

4. 安装依赖 cd php-vs-code && cd slow-io && npm install 

5. 启动应用 pm2 start index.js -i max


#### ab 命令运行服务器配置  ip 45.77.1.67

1. 安装 ab 工具  apt install apache2-utils
2. 安装 node.js 同上
3. 配置 host  sudo vi /etc/hosts  && 添加 
144.202.100.171   slow-io.test        ## your_slow-io_server_ip
149.28.192.228    php-http-api.test   ## your_php-http-api_ip
45.63.92.244     node-http-api.test  ## your_node-http-api_ip




