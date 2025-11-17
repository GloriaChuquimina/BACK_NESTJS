

# Instalación y Configuración de NVM para Nodejs

## 🔄 1. Actualización del sistema

```zsh
# 1. Instalar curl si no existe
sudo apt update
sudo apt install -y curl
```

# 2. Descargar e instalar NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash


# 3. Abre el archivo de zsh
```
nano ~/.bashrc 
```

Al final del archivo, pega estas líneas:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"        # Carga NVM
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Autocompletado NVM
```

Guarda y cierra nano con:

Ctrl + O (Enter para confirmar)

Ctrl + X

# 4. Recargar configuración de Zsh

```
source ~/.bashrc 

```
# 5. Verificar que NVM esté funcionando

```
nvm --version


```

Instalamos node 22

```
nvm install 22        
```

Listar verseiones de node disponibles
```
nvm list 
```

verificar la version de node que se esta utilizando
```
node --version
```