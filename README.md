## Run

### for prod

```shell
$ npm run start:prod
$ npm run deploy:prod
```

### for stg

```shell
$ npm run start:stg
$ npm run deploy:stg
```

## Install

```shell
$ sudo pip3 install aws-sam-cli
$ sam --version
SAM CLI, version 0.43.0
```

```shell
$ sam init

Which template source would you like to use?
	1 - AWS Quick Start Templates
	2 - Custom Template Location
Choice: 1

Which runtime would you like to use?
	1 - nodejs12.x
	2 - python3.8
	3 - ruby2.7
	4 - go1.x
	5 - java11
	6 - dotnetcore2.1
	7 - nodejs10.x
	8 - python3.7
	9 - python3.6
	10 - python2.7
	11 - ruby2.5
	12 - java8
	13 - dotnetcore2.0
	14 - dotnetcore1.0
Runtime: 7

Project name [sam-app]:

Cloning app templates from https://github.com/awslabs/aws-sam-cli-app-templates.git

AWS quick start application templates:
	1 - Hello World Example
	2 - Quick Start: From Scratch
	3 - Quick Start: Scheduled Events
	4 - Quick Start: S3
	5 - Quick Start: SNS
	6 - Quick Start: SQS
	7 - Quick Start: Web Backend
Template selection: 2

-----------------------
Generating application:
-----------------------
Name: sam-app
Runtime: nodejs10.x
Dependency Manager: npm
Application Template: quick-start-from-scratch
Output Directory: .

Next steps can be found in the README file at ./sam-app/README.md
```

- [できた！S3 オリジンへの直接アクセス制限と、インデックスドキュメント機能を共存させる方法](https://dev.classmethod.jp/cloud/aws/directory-indexes-in-s3-origin-backed-cloudfront/)
- [Lambda@Edge で CloudFront へのアクセスをいい感じに振り分ける](https://techblog.zozo.com/entry/lambda-edge)
