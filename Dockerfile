# Usa la versión específica de Node.js que necesitas
FROM node:20.18.0-alpine as builder

WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias primero
COPY package.json package-lock.json* ./

# Instala dependencias con npm ci (más rápido y consistente que npm install)
RUN npm ci

# Copia el resto de los archivos
COPY . .

# Construye la aplicación
RUN npm run build

# Etapa de producción con nginx
FROM nginx:alpine

# Copia los archivos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuración personalizada de nginx si es necesario
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]