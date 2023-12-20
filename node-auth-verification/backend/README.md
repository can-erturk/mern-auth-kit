# API Reference

Below you can see the endpoints in this backend project and the results returned by these endpoints.

Only endpoints and their parameters are explained in this reference. You can try the API to see the results returned.

# Auth route

## Login

```http
POST /auth/login
```

| Parameter  | Description       | Required |
| :--------- | :---------------- | :------- |
| `user`     | Email or username | `true`   |
| `password` | Password          | `true`   |

<br>

## Register

```http
POST /auth/register
```

| Parameter  | Description | Required |
| :--------- | :---------- | :------- |
| `username` | Username    | `true`   |
| `email`    | Email       | `true`   |
| `password` | Password    | `true`   |

<br>

## Get credentials

```http
POST /auth/get-credentials
```

| Parameter | Description    | Required |
| :-------- | :------------- | :------- |
| `jwt`     | User's JWT key | `true`   |
