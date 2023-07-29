function procesoComprar(productosPokemonComprados = [], nombreCliente = null) {
  const tcgpokemon_elitebox = [
    { nombre: "Pokémon | Elite Trainer Box Crown Zenith", precio: 38000 },
    { nombre: "Pokémon | Caja Élite Pokémon GO", precio: 33000 },
    { nombre: "Pokémon | Caja Élite De Entrenador Brilliant Stars", precio: 35000 },
    { nombre: "Pokémon | Caja Élite de Entrenador 151 Pokémon", precio: 28000 },
    { nombre: "Pokémon | Caja Élite de Entrenador Scarlet", precio: 28000 },
    { nombre: "Pokémon | Caja Élite de Entrenador Violet", precio: 25000 },
    { nombre: "Pokémon | Caja Élite Lost Origin", precio: 25000 },
    { nombre: "Pokémon | Caja Élite de Entrenador Silver Tempest", precio: 27000 },
    { nombre: "Pokémon | Caja Élite Vivid Voltage", precio: 30000 },
    { nombre: "Pokémon | Caja Élite de Entrenador Chilling Reign", precio: 35000 },
  ];

  const tcgpokemon_cardsets = [
    { nombre: "Pokémon | Caja Celebraciones Dark Sylveon", precio: 27000 },
    { nombre: "Pokémon | Colección Mimikyu ex", precio: 13000 },
    { nombre: "Pokémon | Caja Paldea Sprigatito / Fuecoco / Quaxly", precio: 16000 },
    { nombre: "Pokémon | Caja Alakazam ex 151 Pokémon", precio: 12000 },
    { nombre: "Pokémon | Caja Zapdos ex 151 Pokémon", precio: 12000 },
    { nombre: "Pokémon | Crown Zenith Morpeko V Unión Box", precio: 30000 },
    { nombre: "Pokémon | Caja Infernape V Castellano", precio: 16000 },
    { nombre: "Pokémon | Morpeko V-Union Box Special Collection", precio: 17000 },
    { nombre: "Pokémon | Caja Virizion V", precio: 12000 },
    { nombre: "Pokémon | Mazos Mewtwo Go", precio: 10000 }
  ];
  
  const tcgpokemon_boosters = [
    { nombre: "Pokémon | Caja 30 Sobres Eevee Heroes", precio: 38000},
    { nombre: "Pokémon | Caja 24 Sobres Soy y Luna", precio: 50000 },
    { nombre: "Pokémon | Caja 36 Sobre Tempestad Plateada", precio: 83000 },
    { nombre: "Pokémon | Caja 36 Sobres Resplandor Astral", precio: 83000 },
    { nombre: "Pokémon | Caja 36 Sobres Fusion Strike", precio: 77000 },
    { nombre: "Pokémon | Caja 18 Sobres Darkness Ablaze ", precio: 43000 },
    { nombre: "Pokémon | Caja 18 Evoluciones en Paldea", precio: 43000 },
    { nombre: "Pokémon | Caja 20 Sobres 151 2023",precio: 37000 },
    { nombre: "Pokémon | Caja 36 Sobres Battle Styles", precio: 80000 },
    { nombre: "Pokémon | Caja 36 Llamas Obsidiana", precio: 80000 },
  ];

  function menuUsuario() {
    while (true) {
      let opcionUsuario = prompt(
        "Seleccione una opción:\n\r1. Mantenimiento\n2. Compra\n3. Salir del programa"
      );

      switch (opcionUsuario) {
        case "1":
          mantenimiento();
          break;

        case "2":
          comprar();
          break;

        case "3":
          alert("¡Hasta luego!");
          return;

        default:
          alert("Opción inválida.");
          break;
      }
    }
  }

  function FechaHoraActual() {
    const fechaHoraActual = new Date();
    const dia = fechaHoraActual.getDate();
    const mes = fechaHoraActual.getMonth() + 1;
    const año = fechaHoraActual.getFullYear();
    const hora = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();

    return `${dia}/${mes}/${año} ${hora}:${minutos}`;
  }

  menuUsuario();
  function solicitarValor(promptMensaje) {
    const valor = prompt(promptMensaje);
    while (!valor) {
      alert("¡Debe ingresar un valor!");
      valor = prompt(promptMensaje);
    }
    return valor;
  }

  function mantenimiento() {
    alert("Bienvenido a la tienda Cards&Games");

    while (true) {
      let opcionAdmin = prompt(
        "Seleccione una opción:\n\r1. Agregar \n2. Eliminar \n3. Buscar \n4. Volver al menú principal"
      );

      switch (opcionAdmin) {
        case "1":
          agregarProductosTCG();
          break;

        case "2":
          eliminarProductosTCG();
          break;

        case "3":
          buscarProductosTCG();
          break;

        case "4":
          return;

        default:
          alert("Opción inválida.");
          break;
      }
    }
  }

  function agregarProductosTCG() {
    let categoria = prompt(
      "Ingrese la categoria que desea agregar:\n1- Elite Box Pokemon\n2- Boosters Pokemon\n3-Cards Sets Pokemon"
    );

    switch (categoria) {
      case "1":
        agregarProducto(tcgpokemon_elitebox);
        break;
      case "2":
        agregarProducto(tcgpokemon_boosters);
        break;
      case "3":
        agregarProducto(tcgpokemon_cardsets);
        break;
      default:
        alert("Opción no válida. Por favor, selecciona una opción del 1 al 4.");
        break;
    }
  }

  function agregarProducto(listaProducto) {
    while (true) {
      let nombreProducto = solicitarValor("Ingrese el nombre del producto");
      let precioProducto = null;
      
    
      while (precioProducto === null) {
        let precioIngresado = prompt("Ingrese el precio del producto:");
        precioProducto = parseFloat(precioIngresado);
  
        if (isNaN(precioProducto) || precioProducto < 1 ) {
          alert("El precio ingresado no es válido. Por favor, ingrese un número.");
          precioProducto = null;
        }
      }
      

      listaProducto.push({
        nombre: nombreProducto,
        precio: precioProducto,
      });

      alert("Producto agregado");

      let opcion = solicitarValor("¿Desea agregar otro producto?\n\r1. Sí\n2. Volver al menú principal del mantenimiento");
      if (opcion !== "1") {
        return;
      }
    }
  }

  function eliminarProductosTCG() {
    let tipoProducto = prompt(
      "Ingrese el tipo de producto a eliminar:\n1- Elite Box Pokemon\n2- Boosters Pokemon\n3- Cards Sets Pokemon"
    );

    let listaProductos;

    switch (tipoProducto) {
      case "1":
        listaProductos = tcgpokemon_elitebox;
        break;

      case "2":
        listaProductos = tcgpokemon_boosters;
        break;

      case "3":
        listaProductos = tcgpokemon_cardsets;
        break;

      default:
        alert("Opción inválida.");
        return;
    }

    let mensajeProductos = "\nListado de Productos:\n";
    for (let i = 0; i < listaProductos.length; i++) {
      mensajeProductos += `${i + 1}. ${listaProductos[i].nombre} - $${
        listaProductos[i].precio
      }\n`;
    }

    let numeroProductoEliminar = parseInt(
      prompt(
        `Seleccione el número del producto que desea eliminar:\n${mensajeProductos}`
      )
    );

    if (
      numeroProductoEliminar >= 1 &&
      numeroProductoEliminar <= listaProductos.length
    ) {
      listaProductos.splice(numeroProductoEliminar - 1, 1);
      alert("¡Producto eliminado exitosamente!");
    } else {
      alert("Número de producto inválido.");
    }
  }

  function buscarProductosTCG() {
    let tipoProducto = prompt(
      "Ingrese el tipo de producto a buscar:\n1- Elite Box Pokemon\n2- Boosters Pokemon\n3-Cards Sets Pokemon"
    );

    let listaProductos;

    switch (tipoProducto) {
      case "1":
        listaProductos = tcgpokemon_elitebox;
        break;

      case "2":
        listaProductos = tcgpokemon_boosters;
        break;

      case "3":
        listaProductos = tcgpokemon_cardsets;
        break;

      default:
        alert("Opción inválida.");
        return;
    }

    let opcionBuscar = prompt(
      "Seleccione una opción para buscar productos:\n\r1. Filtrar alfabéticamente\n2. Filtrar por número"
    );

    switch (opcionBuscar) {
      case "1":
        let nombreBuscar = prompt("Ingrese el nombre del producto a buscar:");
        let resultadosNombre = listaProductos.filter((producto) =>
          producto.nombre.toLowerCase().includes(nombreBuscar.toLowerCase())
        );

        if (resultadosNombre.length === 0) {
          alert("No se encontraron productos con ese nombre.");
        } else {
          mostrarResultados(resultadosNombre);
        }
        break;

      case "2":
        let numeroBuscar = parseInt(
          prompt("Ingrese el número del producto a buscar:")
        );
        if (numeroBuscar >= 1 && numeroBuscar <= listaProductos.length) {
          alert(
            `Producto encontrado:\n${
              listaProductos[numeroBuscar - 1].nombre
            } - $${listaProductos[numeroBuscar - 1].precio}`
          );
        } else {
          alert("Número de producto inválido.");
        }
        break;

      default:
        alert("Opción inválida.");
        break;
    }
  }

  function mostrarResultados(resultados) {
    let mensajeResultados = "Resultados de la búsqueda:\n";
    for (let i = 0; i < resultados.length; i++) {
      mensajeResultados += `${i + 1}. ${resultados[i].nombre} - $${
        resultados[i].precio
      }\n`;
    }
    alert(mensajeResultados);
  }

  function comprar() {
    let precioTotal = 0;
    let cantidadProductosComprados = 0;
    let bienvenida = "Bienvenido a la tienda Cards&Games\n";
    let mensajeCategorias =
      "Seleccione una categoría de productos:\n\r1. Elite Box Pokemon\n2. Boosters Pokemon\n3. Cards Sets Pokemon\n";

    let categoriaElegida = parseInt(prompt(bienvenida + mensajeCategorias));

    while (categoriaElegida < 1 || categoriaElegida > 3) {
      categoriaElegida = parseInt(
        prompt("Opción inválida. " + mensajeCategorias)
      );
    }

    let listaProductos;
    let mensajeProductos;

    switch (categoriaElegida) {
      case 1:
        listaProductos = tcgpokemon_elitebox;
        mensajeProductos = "\nListado de Elite Box Pokemon:\n";
        break;

      case 2:
        listaProductos = tcgpokemon_boosters;
        mensajeProductos = "\nListado de Boosters Pokemon:\n";
        break;

      case 3:
        listaProductos = tcgpokemon_cardsets;
        mensajeProductos = "\nListado de Cards Sets Pokemon:\n";
        break;

      default:
        alert("Opción inválida.");
        return;
    }

    for (let i = 0; i < listaProductos.length; i++) {
      mensajeProductos += `${i + 1}. ${listaProductos[i].nombre} - $${
        listaProductos[i].precio
      }\n`;
    }

    alert(bienvenida + mensajeProductos);

    if (!nombreCliente) {
      nombreCliente = prompt("Ingrese su nombre:");
      while (nombreCliente && !/^[a-zA-Z]+$/.test(nombreCliente)) {
        nombreCliente = prompt("¡Error! Ingrese un nombre válido:");
      }
    }

    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));

    while (cantidadProductos < 1 || cantidadProductos > listaProductos.length) {
      cantidadProductos = parseInt(prompt("Cantidad inválida, solo puede comprar una unidad por producto. Ingrese la cantidad de productos que desea comprar:"));
    }

    for (let i = 0; i < cantidadProductos; i++) {
      let numeroProducto = parseInt(prompt(`Ingrese el número del producto: \n\n${mensajeProductos}`));
      while (numeroProducto < 1 || numeroProducto > listaProductos.length) {
        numeroProducto = parseInt(
          prompt(`Número inválido. Ingrese el número del producto #${i + 1}:\n\n${mensajeProductos}`));
      }
      let producto = listaProductos[numeroProducto - 1];
      let cantidadDeseada = parseInt(prompt(`Ingrese la cantidad deseada de "${producto.nombre}":`));
  
      while (isNaN(cantidadDeseada) || cantidadDeseada < 1) {
        cantidadDeseada = parseInt(prompt(`Cantidad inválida. Ingrese la cantidad deseada de "${producto.nombre}":`));
      }

      let productoDuplicado = false;
      for (let j = 0; j < productosPokemonComprados.length; j++) {
        if (productosPokemonComprados[j].nombre === producto.nombre) {
          productosPokemonComprados[j].cantidad += cantidadDeseada;
          productoDuplicado = true;
          break;
        }
      }

      if (!productoDuplicado) {
        producto.cantidad = cantidadDeseada;
        productosPokemonComprados.push(producto);
      }

      cantidadProductosComprados += cantidadDeseada;
    }

    for (let producto of productosPokemonComprados) {
      precioTotal += producto.precio * producto.cantidad;
    }


    let mensajeCompra = `Productos comprados por ${nombreCliente}:\n\n`;
    for (let i = 0; i < productosPokemonComprados.length; i++) {
      let producto = productosPokemonComprados[i];
      mensajeCompra += `${i + 1}. ${producto.nombre} - Cantidad: ${producto.cantidad} - $${producto.precio * producto.cantidad}\n`;
    }
    mensajeCompra += `\nPrecio total: $${precioTotal}`;
    
    mensajeCompra += `\n\rFecha y hora de la compra: ${FechaHoraActual()}`;

    while (true) {
      let opcion = solicitarValor(
        "Seleccione una opción:\n\r1. Ver el resumen de compra\n2. Agregar más productos\n3. Regresar al menu principal"
      );

      switch (opcion) {
        case "1":
          let mensajeFinal = "+-----------------------+\n";
          mensajeFinal += "|   Resumen de Compra   |\n";
          mensajeFinal += "+-----------------------+\n";
          mensajeFinal += mensajeCompra + "\n";
          mensajeFinal += "+-----------------------+";
          alert(mensajeFinal);
          break;

        case "2":
          comprar();
          break;

        case "3":
          alert("¡Hasta luego!");
          return;

        default:
          alert("Opción inválida.");
          break;
      }
    }
  }
}
let mensaje = procesoComprar();
