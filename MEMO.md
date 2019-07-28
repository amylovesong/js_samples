#生成RSA密钥对的方法：

1. 在命令行执行以下命令以生成一个RSA密钥对：
openssl genrsa -aes256 -out rsa-key.pem 2048


2. 通过上面的rsa-key.pem加密文件，我们可以导出原始的私钥，命令如下：
openssl rsa -in rsa-key.pem -outform PEM -out rsa-prv.pem

3. 用下面的命令导出原始的公钥：
openssl rsa -in rsa-key.pem -outform PEM -pubout -out rsa-pub.pem

这样，我们就准备好了原始私钥文件rsa-prv.pem和原始公钥文件rsa-pub.pem，编码格式均为PEM。
