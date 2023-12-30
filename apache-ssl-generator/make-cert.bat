@echo off
set /p domain="Enter Domain: "
set OPENSSL_CONF=../conf/openssl.cnf

if not exist .\%domain% mkdir .\%domain%

..\bin\openssl req -config cert.conf -new -sha256 -newkey rsa:2048 -nodes -keyout %domain%\server.key -x509 -days 3650 -out %domain%\server.crt

echo.

if not exist .\%domain%\server.crt echo Certificate creation failed. && echo. && pause

echo The certificate was provided for %domain%

echo.
pause