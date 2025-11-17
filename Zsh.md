# Instalación y Configuración de ZSH con Oh My Zsh

## 🔄 1. Actualización del sistema

```bash
sudo apt-get update      # Actualiza la lista de paquetes disponibles
sudo apt-get upgrade     # Instala las versiones más recientes de los paquetes instalados
```

## 🧪 2. Instalación de ZSH

```bash
sudo apt install zsh     # Instala ZSH, una shell más potente y configurable que bash
```

## ⚙️ 3. Instalación de Oh My Zsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# Descarga e instala Oh My Zsh, un framework para gestionar la configuración de ZSH
```

## 🧾 4. Establecer ZSH como shell por defecto

```bash
chsh -s $(which zsh)     # Cambia la shell predeterminada del usuario a ZSH
```

## 📝 5. Editar configuración de ZSH

```bash
sudo nano ~/.zshrc       # Abre el archivo de configuración de ZSH en el editor nano
```

Dentro del archivo, cambia la línea de plugins por:

```bash
plugins=(git zsh-autosuggestions zsh-completions)
# Habilita los plugins de git, sugerencias automáticas y autocompletado
```

## 🔁 6. Aplicar cambios

```bash
source ~/.zshrc          # Recarga el archivo de configuración de ZSH para aplicar los cambios
```

---

✅ Con estos pasos, habrás instalado y configurado ZSH con Oh My Zsh y algunos plugins útiles.  
Puedes personalizar aún más tu terminal modificando `.zshrc` o instalando temas como `powerlevel10k`.