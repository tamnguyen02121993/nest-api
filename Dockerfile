FROM node:22-alpine AS setup-stage
WORKDIR /usr/app
COPY package.json pnpm-lock.yaml .
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile

FROM setup-stage as build-stage
WORKDIR /usr/app
COPY . .
RUN pnpm run build


FROM node:22-alpine as final-stage
WORKDIR /usr/app
COPY --from=build-stage /usr/app/node_modules ./node_modules
COPY --from=build-stage /usr/app/dist dist
CMD ["node", "dist/main.js"]