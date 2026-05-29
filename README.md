# EduTrack - Plataforma de Seguimiento Académico (Backend)

Este es el repositorio del **Backend** (API) para el proyecto EduTrack del SENA. Contiene la base de los servicios requeridos según la evidencia técnica.

## 🚀 Guía Rápida para el Equipo (¡Lean esto primero!)

Hola equipo, aquí les dejo las instrucciones paso a paso para que puedan tener este proyecto corriendo en sus computadoras y entiendan qué se hizo. 

### 1. ¿Cómo descargar y abrir el proyecto?
1. Necesitan tener instalado **Node.js** y **Git** en sus computadoras.
2. Abran su terminal o consola (puede ser la de VS Code) y clonen el repositorio con:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
3. Abran la carpeta del proyecto en **Visual Studio Code**.

### 2. 🤖 Recomendación de herramienta: Antigravity
Les súper recomiendo instalar una extensión en VS Code llamada **Antigravity** (o herramientas de IA similares como Gemini Code Assist/Copilot). 
- **¿Por qué?** Porque nos ayuda muchísimo a programar más rápido, nos explica código que no entendamos y hasta nos ayuda a encontrar errores. Como apenas estamos aprendiendo, es como tener un profesor al lado explicándonos línea por línea.

### 3. ¿Cómo instalar todo y correr el proyecto?
Abran una terminal dentro de la carpeta `backend` (importante, tienen que estar adentro de la carpeta `backend` porque el proyecto se separó como buena práctica) y ejecuten:

```bash
cd backend
npm install
npm run start:dev
```
*`npm install` descarga todas las dependencias.*
*`npm run start:dev` levanta el servidor y lo deja escuchando cambios en el puerto 3000.*

### 4. Buenas prácticas con Git: Ramas y Pull Requests 🌳
Si alguno desea modificar el código, agregar algo o arreglar un error **por favor no lo hagan directamente en la rama principal (`main`)**. Como buena práctica de la industria:
1. Abran la terminal y creen una nueva rama con el nombre de lo que van a hacer: `git checkout -b nombre-de-la-tarea`.
2. Hagan sus cambios y "commits" en esa rama.
3. Cuando terminen, suban esa rama a GitHub (`git push origin nombre-de-la-tarea`).
4. Vayan a GitHub y creen un **Pull Request (PR)**. Así entre todos podemos revisar el código antes de mezclarlo con la rama principal. ¡Es vital acostumbrarnos a trabajar así!

### 5. ¿Qué código se hizo y cómo entenderlo?
Para cumplir con la rúbrica (Evidencia **GA6-220501123-AA2-EV01**), implementé la API con **NestJS** porque es lo más profesional y estructurado. 
- Creé los módulos básicos: `auth` (para el login), `usuarios` (gestión) y `seguimiento` (para ver el progreso).
- **Dejé muchos comentarios en español** en archivos como `src/usuarios/usuarios.service.ts` y `src/auth/auth.service.ts` para que vean qué hace cada función línea por línea. ¡Léanlos para no perderse!

### 5. ¿Cómo probar la API en Postman?
La evidencia pedía que se probara en Postman, así que dejé un archivo listo:
1. Abran Postman.
2. Den clic en **"Import"**.
3. Busquen y seleccionen el archivo que está en la carpeta principal llamado `EduTrack.postman_collection.json`.
4. ¡Listo! Ahí tendrán las peticiones armadas para probar el Login, Crear Usuario y Ver Seguimiento. Asegúrense de que el servidor esté corriendo (`npm run start:dev`) antes de probarlas.

### 6. ¿Y la Base de Datos?
Por el momento, **estamos usando memoria temporal (arrays)**. Esto significa que si apagan el servidor, los usuarios creados se borran. Lo hice así para cumplir rápido con esta evidencia de forma sencilla, pero **el siguiente paso será conectar una base de datos PostgreSQL** usando TypeORM. ¡Eso lo iremos haciendo poco a poco!

---

## 📄 Información Oficial del Proyecto (Documentación IEEE 830)

**Servicio Nacional de Aprendizaje - SENA**
**Programa:** Aplicaciones y Servicios para la Nube
**Ficha:** 3335994
**Docente:** Jorge Enrique Callejas Franco

### Autores
- Santiago José Barbosa Rivas
- Emanuel Mancípe Romero
- Rebeca Judith Rivera Mendoza
- Paula Martinez(la vocerita)

### Alcance del Proyecto
El proyecto cubrirá las siguientes funcionalidades principales:
- Registro, consulta y gestión de información académica.
- Acceso diferenciado por roles (Administrador, Docente/Instructor, Estudiante/Aprendiz).
- Generación de reportes y gráficos de rendimiento.
- Emisión de alertas automatizadas por bajo desempeño.
- Gestión de grupos, asignaturas y periodos académicos.
- Acceso multiplataforma (Web y Móvil - Frontend pendiente).

### Requisitos Funcionales (RF) Principales
| Código | Nombre | Descripción | Prioridad |
|--------|--------|-------------|-----------|
| RF-01 | Inicio de Sesión | Autenticación con correo y contraseña. | Alta (Must Have) |
| RF-02 | Registro de Aprendices | Registro de nuevos aprendices asociados a una ficha. | Alta (Must Have) |
| RF-04 | Seguimiento Académico | Visualización del avance por competencia. | Alta (Must Have) |
| RF-06 | Panel Administrativo | Estadísticas globales para coordinadores. | Alta (Must Have) |

### Requisitos No Funcionales (RNF) Principales
- **Seguridad**: Cifrado de contraseñas (SHA-256).
- **Rendimiento**: Carga de vistas en menos de 3 segundos.
- **Disponibilidad**: Operatividad del 99% del tiempo.

### Estructura de Trabajo (Jira - Metodología Scrum)
1. Gestión de Usuarios
2. Gestión Académica
3. Seguimiento del Aprendiz
4. Reportes e Indicadores
5. Panel Administrativo


   <img width="1600" height="850" alt="image" src="https://github.com/user-attachments/assets/6baa9c7d-0c56-493e-bd14-c57b04175aa6" />
   <img width="1600" height="850" alt="image" src="https://github.com/user-attachments/assets/b45dbab6-1450-4bd0-9d5e-cdcdb940f483" />
   <img width="1600" height="850" alt="image" src="https://github.com/user-attachments/assets/70c60d68-3b87-4b0a-9f3e-993e51e316c5" />
   <img width="1600" height="850" alt="image" src="https://github.com/user-attachments/assets/ebf0ec75-fdce-4a54-8695-e8f8b3bb6560" />




