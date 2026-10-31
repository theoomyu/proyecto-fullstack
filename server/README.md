# VetCare - Sistema de Gestión Veterinaria

- Descripción General y Objetivo
**VetCare** es una aplicación web Full-Stack diseñada para la gestión de una clínica veterinaria. El objetivo principal es ofrecer una plataforma moderna donde los usuarios puedan conocer los servicios, promociones y el equipo médico, además de contar con un panel de administración protegido para gestionar los servicios ofrecidos.
La aplicación implementa un sistema de autenticación seguro (JWT + Bcrypt) y un CRUD completo (Crear, Leer, Actualizar, Eliminar) para la entidad "Servicios", cumpliendo con los estándares de desarrollo web moderno.

#Tecnologías Utilizadas
- Frontend
*   **React** (con Vite)
*   **TypeScript**
*   **Tailwind CSS** (para los estilos y diseño responsive)
*   **React Router** (para la navegación)
*   **TanStack Query** (para el manejo de estados y peticiones HTTP)
*   **Swiper.js** (para el carrusel de la página principal)

- Backend
*   **Node.js** + **Express**
*   **TypeScript**
*   **MongoDB** + **Mongoose** (Base de datos NoSQL)
*   **JWT (JSON Web Tokens)** (para la autenticación)
*   **Bcrypt.js** (para el hashing de contraseñas)
*   **CORS** (para la comunicación entre frontend y backend)

- Requisitos Previos para la Instalación
*   Node.js (v18 o superior)
*   npm (v9 o superior)
*   Una cuenta en **MongoDB Atlas** (o MongoDB instalado localmente)
*   Git

- Instrucciones Paso a Paso para Instalar las Dependencias

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/theoomyu/vetcare.git
   cd vetcare
