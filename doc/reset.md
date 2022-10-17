# git reset

    Borra commits de la historia de un repositorio. Nos permite volver a un commit anterior.

- **git reset --hard hash**: Borra todos los commits posteriores al commit con el hash indicado incluido el staging area.
- **git reset --soft hash**: Borra todos los commits posteriores al commit con el hash indicado,manteniendo el staging area.

- **git reset --hard HEAD~1**: Borra el último commit incluido el staging area.
- **git reset --soft HEAD~1**: Borra el último commit manteniendo el staging area.
- **git reset HEAD**: Borra todos los archivos del staging area.

-**git reset --hard HEAD**: Borra los cambios y el staging area y lo deja como estaba el último commit.

# git rm

        Elimina archivos del staging area y del directorio de trabajo.

- --cached: Elimina archivos del staging area y del repositorio local. Basicamente deja de trackear el archivo.
- --force: Elimina archivos del staging area y del disco duro. Basicamente elimina el archivo.
- -r: Elimina archivos de forma recursiva.

# git checkout

    Cambia de rama o cambiar el estado de un archivo.

- **git checkout hash hello.html**: Cambia el estado del archivo hello.html al commit con el hash indicado. Si se hace un commit después de esto, se crea un nuevo commit con el estado del archivo hello.html del commit con el hash indicado.
- **git checkout head hello.html**: Cambia el estado del archivo hello.html al último commit.
