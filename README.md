# SampleCalculator

Simple calculadora AngularJS y minificada con Grunt y UglifyJs.

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

Entrar a la carpeta principal e instalemos las dependencias del ejemplo
```
npm i
```

## Ejecución

La ejecución esta dividida en 2 partes, primero hacemos trabajemos los js minificandolos y uniendolos con **uglifyjs**

```
uglifyjs js/angular.js js/app.js -o app.full.min.js
```

La segunda parte se realiza con grunt, que se encarga de minificar el html y los css y los deja en la carpeta dist.

Para lo cual solamente lo ejecutamos, ya que toda la configuración esta en el archivo **Gruntfile.js**
```
grunt
```



