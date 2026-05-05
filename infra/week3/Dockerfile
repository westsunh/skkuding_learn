# 베이스 이미지: Node.js 22 경량 버전
FROM node:22-alpine

# 컨테이너 안 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 먼저 복사 (레이어 캐싱 최적화)
COPY package*.json ./

# 의존성 설치
RUN npm install

# 나머지 소스코드 복사
COPY . .

# 앱이 사용하는 포트 문서화 (실제로 열리는 건 -p 옵션)
EXPOSE 3000

# 컨테이너 실행 시 이 명령어가 실행됨
CMD ["node", "server.js"]