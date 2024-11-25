# 1. 운영체제 및 프로그램 설치 

FROM node:18
# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn   -> node를 한번 깔아버리면 명령어 하나로 가능

#2. git clone 후 소스코드 가짜 컴퓨터 안에서 다운로드 받기 -> 폴더내에서 copy해서 가져오면 됌. -> 이 안에서 폴더 하나를 만들어서 그 안에다가 이 모든 파일들을 그 안에 넣음 -> git clone이랑 동일한 기능
# RUN git clone 내프로젝트주소
# WORKDIR : 여기를 작업폴더로 해라, 폴더 생성하고 이동까지
COPY . /afterFolder/
WORKDIR /afterFolder/

# 3. 최종 실행하기
RUN yarn install
RUN yarn build  
#위에까지만 이미지라는 것으로 생성되는 거고 마지막은 실행하기 -> docker build : 하나의 이미지(파일)로 만드는 명령어 ++ docker images : 내가 어떤 컴퓨터를 만들어놨는지 확인가능
# docker run (이미지) : 괄호안에 이미지 실행하겠다는 의미
CMD yarn start