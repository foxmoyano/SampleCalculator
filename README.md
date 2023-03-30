# SampleCalculator

Simple calculadora AngularJS y minificada con Grunt.

## Instalación

Descargar el ejemplo desde git

```
git clone https://github.com/foxmoyano/SampleCalculator.git
```

Entrar a la carpeta principal e instalar las dependencias
```
npm install
```


Basicamente se utilizaron 2 carpetas:

**build**: carpeta que contiene los archivos temporales creados por las tareas de grunt.
**dist**: carpeta donde quedan los archivos finales minificados.

Para minificar los archivos js se utilizo **uglifyjs** la cual no es parte de las tareas del grunt.

Para usar **uglifyjs** se ejecutó lo siguiente, antes de usar grunt:

```
uglifyjs js/app.js -o app.min.js
```



