# Utiliza una imagen de Jenkins basada en la imagen oficial de Jenkins con soporte para Docker
FROM jenkins/jenkins:latest

# Cambia al usuario root para instalar herramientas adicionales
USER root

# Instala Docker dentro del contenedor Jenkins para que pueda interactuar con Docker en el host
RUN apt-get update && \
    apt-get install -y apt-transport-https \
                       ca-certificates \
                       curl \
                       gnupg-agent \
                       software-properties-common && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
    apt-get update && \
    apt-get install -y docker-ce docker-ce-cli containerd.io && \
    usermod -aG docker jenkins

# Cambia de nuevo al usuario jenkins
USER jenkins

# Instala los plugins necesarios para construir y desplegar aplicaciones
RUN /usr/local/bin/install-plugins.sh \
    git \
    docker-plugin \
    pipeline \
    blueocean

# Define el directorio de trabajo
WORKDIR /var/jenkins_home

