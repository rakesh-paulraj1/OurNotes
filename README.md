## Ournotes

It is a FULLSTACK application used for sharing PDF's between students
The primary TECHSTACK:Nextjs,Postgres,Prisma,Redis,Docker

## Installation with DOCKER

First clone the project

```bash
git clone https://github.com/rakesh-paulraj1/OurNotes
```
```bash
npm install 
```
.ENV FILE

```bash
NEXT_SECRET=notesapp_password
DATABASE_URL=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
AWS_S3_REGION=ap-
AWS_S3_ACCESS_KEY_ID=
AWS_S3_SECRET_ACCESS_KEY=
AWS_S3_BUCKET_NAME=
REDIS_URL=
```
THEN USE THIS COMMAND
```bash
docker compose up
```

## Manual Installation
install packages
```bash
npm install
```
Migrate the databse 
```bash
npx prisma migrate -dev
```
Generate client
```bash
npx primsa generate
```
run the application 
```bash
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
