# SampleCalculator

Simple calculadora AngularJS y minificada con Grunt.

## Instalación

Primero instalemos grunt
```
npm i -g grunt-cli
```

Luego instalemos **uglify-js**
```
npm i -g uglify-js
```

Ahora descarguemos el ejemplo desde git

```
git clone https://github.com/foxmoyano/SampleCalculator.git
```

Entrar a la carpeta principal e instalar las dependencias del ejemplo
```
npm i
```

## Ejecución

La ejecución esta dividida en 2 partes, primero hacemos el empaquetado de los js y minificamos con **uglifyjs**

```
uglifyjs js/angular.js js/app.js -o app.full.min.js
```

La segunda parte se realiza con grunt, para lo cual solamente lo ejecutamos
```
grunt
```

Esto genera la carpeta dist con el html, css y js minificados.


