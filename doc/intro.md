## conceptos

### **branch**

    Es una linea de desarrollo independiente de un proyecto.
    ✅ master es el nombre por defecto de la rama principal de un proyecto.
    ✅ git branch: Muestra las ramas existentes.

### **commit**

    Es un punto en la historia de un proyecto, es decir, es una captura de los archivos en un momento determinado.

### **merge**

    Es la unión de dos o más ramas de desarrollo.

### **pull**

    Es la acción de traer los cambios de un repositorio remoto a un repositorio local.

### **push**

    Es la acción de enviar los cambios de un repositorio local a un repositorio remoto.

### **rebase**

    Es la acción de mover una rama a un nuevo commit base.

### **remote**

    Es un repositorio que no está en el mismo equipo que el repositorio local.

### **stash**

    Es la acción de guardar temporalmente los cambios que no se han hecho commit.

## configuracion de git

- git config --global user.name "nombre"
- git config --global user.email "email"
- git config --list (muestra la configuracion de git)

## comandos basicos

- **git init**: Inicializa un repositorio git en el directorio actual
- **git status**: Muestra el estado del repositorio
- **git add .**: Agrega archivos al staging area (área de preparación)
- **git commit -m "mensaje"**: Crea un commit con los archivos del staging area.
- **git log**: Muestra el historial de commits
- **git rm --cached -r .**: Elimina todos los archivos del staging area.
- **git show hello.html**: Muestra el cambio que se hizo en el archivo hello.html

- **git diff hash hash**: Muestra la diferencia entre dos commits

## atajos basicos

- esc + shift + z + z: salir del editor vim
- q + enter: salir del editor nano
