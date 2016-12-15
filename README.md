# FAQ Conecta

Aplicativo desenvolvido com o intuito de dar dicas e soluções simples aos clientes da Conecta Telecom, com problemas em sua internet.

### Requisitos:
* NodeJS
* Ionic
* Cordova

### Dependências: 
* express
* gulp
* gulp-concat
* gulp-minify-css
* gulp-rename
* nodemon
* socket.io

### Dependências Desenvolvedor:
* bower
* gulp-util
* shelljs

### Plugins:
* cordova-plugin-device
* cordova-plugin-console
* cordova-plugin-whitelist
* cordova-plugin-splashscreen
* cordova-plugin-statusbar
* ionic-plugin-keyboard
* phonegap
* sendgrid
* emailComposer
* socket.io
* pg

### Instalando:
* Clone o repositório na pasta de sua preferência
* Vá para essa pasta e execute no terminal:
```console
$ npm install -g cordova ionic
```

```console
$ npm install
```
### Rodando o Projeto:
* Após instalar todas as dependências necessárias vá para a pasta do projeto e execute:

```console
$ ionic serve -l
```

### Criando e assinando a apk android
* A ultima versão desenvolvida está na pasta apk, e já está pronta para ser instalada (é necessário permitir a instalação de aplicativos não obtidos da Play Store)

### Adicionando a plataforma android e construindo o apk:

```console
$ ionic add platform android
```

```console
$ ionic build android --release
```

 o arquivo se encontrará em platforms/android/build/outputs/apk

### Criando sua Chave e assinando o apk

* Para criar e executar o apk em um aparelho android você precisará criar uma chave na keystore, utilizando os seguintes comandos

```console
$ keytool -genkey -v keystore nome_da_chave.keystore -alias alias_name -keyalg RSA -keysize 2048 - validity 10000
```
* Insira a senha que será utilizada toda vez que o apk for assinado e suas informações

* Para assinar execute o comando abaixo

```console
	$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore nome_da_chave.keystore android-release-unsigned.apk alias_name
```

_Caso não consiga executar o Java, vá para Java/jdk/bin, cole o apk e a chave lá e tente novamente_


