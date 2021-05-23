# BRUJANAILS


### Environment setup
 - Install [Node.js](https://nodejs.org/)
 - Install [OpenSSL](https://www.openssl.org/)

### Dependencies
 ```
 npm install  
 ```
### Create directory cert
```
 mkdir cert
 cd cert
```
### Create your SSL Certificate 
```
 openssl genrsa -aes256 -out my_cert.pem 2048
 openssl req -new -key my_cert.pem -out my_cert.csr
 openssl x509 -req -days 365 -in my_cert.csr -signkey my_cert.pem -out my_cert.crt
 openssl rsa -in my_cert.pem -out my_cert.key
```
### Run
 ```
 cd ..
 npm start
 ```

### Open your browser 
`<link>` : <http://localhost:3000>
or
`<link>` : <https://localhost:3443>