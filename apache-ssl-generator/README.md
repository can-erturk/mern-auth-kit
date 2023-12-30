## About this tool

This tool is used to generate SSL certificates for Apache servers. Create a folder in the root directory of your Apache server and store this tool in the created folder. When it is run, it will create a new directory (in folder of the tool is located) with the given domain name and add the certificate to this directory. The file named 'server.crt' added to this newly created directory will need to be defined as a certificate.

Remember, in order for the tool to work, a folder must be created in the root directory of the Apache server and run in that folder.

If you get error like below, the folder is not located in the root directory of your Apache server.

```bash
> System cannot find specified path.

> Certificate creation failed.
```

## Usage

- After running the file named 'make-cert.bat', enter the requested information. It's not required to enter correct information. (Just domain required)

- After adding all the requested information, you can find the SSL certificate in a directory created with your domain name.

- You can use SSL by setting it in the Apache server configuration and adding it to the certificates on your device.
