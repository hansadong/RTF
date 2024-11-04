# 1. 빌드 환경 설정
FROM node:20-alpine as build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# 2. Nginx를 사용한 웹 서버 설정
FROM nginx:alpine

# Nginx 설정 복사
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# React 빌드 파일 복사
COPY --from=build /app/build /usr/share/nginx/html

# 80 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
