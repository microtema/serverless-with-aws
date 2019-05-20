# TDD for AWS Lambda with Serverless framework and Jest
## Introduction
The serverless framework makes it easy to develop and deploy cloud functions. In this article I'll cover the AWS provider of the framework, although the principles should be very similar for the other providers, especially given the fact the serverless team works hard for a truly multi-provider framework.

There is a good document with guidelines for writing tests in serverless already. Also, there is another blog post about the basics. However, currently there's no much information on using Jest which is trending in the community.

## By the end of this article, you will:

have a working development environment with modern JavaScript (ES2005 and up)
be able to use Jest effectively
know how to test your library code - the helpers used by lambda functions
be able to test lambda functions without killing yourself with abstractions
learn how to use test doubles for AWS services
