FROM nginx:alpine

# Copia os arquivos do projeto para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

EXPOSE 80