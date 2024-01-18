# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.15.0-alpine3.17

FROM node:${NODE_VERSION} AS builder
WORKDIR /appl
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm install -g pnpm

RUN pnpm build 

FROM node:${NODE_VERSION}
USER node:node
WORKDIR /appl
COPY --from=builder --chown=node:node /appl/build ./build
COPY --from=builder --chown=node:node /appl/node_modules ./node_modules
COPY --chown=node:node package.json .
CMD ["pnpm", "preview"]