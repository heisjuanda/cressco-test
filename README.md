                                             
# Descripción
Crea un hook personalizado llamado useFetchUser que traiga información de la API. Este hook debe retornar un objeto con las siguientes propiedades: isLoading, data, isError, error. Utiliza este hook en la app para obtener información de la API cuando cargue la app y cuando se oprima el botón "FETCH API".

La app tiene 2 componentes y un botón. Esos dos componentes deberán mostrarse uno al lado del otro con un espaciado entre ellos. Y el botón deberá mostrarse centrado debajo de los dos componentes.

En el componente UserProfile, se debe mostrar la siguiente información: Imagen, Nombre completo, país. La información debe estar centrada y una encima de la otra, sin ningún orden en particular.

En el componente UsersTable, se debe mostrar un listado numerado de los nombres de los usuarios que se han llamado. Y cada vez que se llame un nuevo usuario de la api, se agregará ese usuario al listado.

API = https://randomuser.me/api -> Esta api trae usuarios random cada vez que se llama.

# Información adicional
Puedes hacer cualquier investigación en google.
Puedes preguntarme cualquier pregunta orientadora.
Puedes revisar cualquier recurso que tengas.
# Criterios de evaluación
Implementación eficiente del hook personalizado useFetchUser.
Un manejo limpio de la data y su correcta visualización en los componentes.
Manejo de estilos idóneos para la tarea.
La revisión de recursos/google o preguntas orientadores no serán un criterio de calificación.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
