# Usa una imagen base de Node.js
FROM node:20

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar archivos
COPY package*.json ./
RUN npm install
COPY . .

# Exponer el puerto en el que corre la app
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "server.js"]
