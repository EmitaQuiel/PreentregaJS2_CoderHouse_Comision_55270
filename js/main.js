class productoTCG {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const tcgpokemon_elitebox = [
  new productoTCG("Pokémon | Elite Trainer Box Crown Zenith", 38000),
  new productoTCG("Pokémon | Caja Élite Pokémon GO", 33000),
  new productoTCG("Pokémon | Caja Élite De Entrenador Brilliant Stars", 35000),
  new productoTCG("Pokémon | Caja Élite de Entrenador 151 Pokémon", 28000),
  new productoTCG("Pokémon | Caja Élite de Entrenador Scarlet", 28000),
  new productoTCG("Pokémon | Caja Élite de Entrenador Violet", 25000),
  new productoTCG("Pokémon | Caja Élite Lost Origin", 25000),
  new productoTCG("Pokémon | Caja Élite de Entrenador Silver Tempest", 27000),
  new productoTCG("Pokémon | Caja Élite Vivid Voltage", 30000),
  new productoTCG("Pokémon | Caja Élite de Entrenador Chilling Reign", 35000),
];

const tcgpokemon_cardsets = [
  new productoTCG("Pokémon | Caja Celebraciones Dark Sylveon", 27000),
  new productoTCG("Pokémon | Colección Mimikyu ex", 13000),
  new productoTCG("Pokémon | Caja Paldea Sprigatito / Fuecoco / Quaxly", 16000),
  new productoTCG("Pokémon | Caja Alakazam ex 151 Pokémon", 12000),
  new productoTCG("Pokémon | Caja Zapdos ex 151 Pokémon", 12000),
  new productoTCG("Pokémon | Crown Zenith Morpeko V Unión Box", 30000),
  new productoTCG("Pokémon | Caja Infernape V Castellano", 16000),
  new productoTCG("Pokémon | Morpeko V-Union Box Special Collection", 17000),
  new productoTCG("Pokémon | Caja Virizion V", 12000),
  new productoTCG("Pokémon | Mazos Mewtwo Go", 10000),
];

const tcgpokemon_boosters = [
  new productoTCG("Pokémon | Caja 30 Sobres Eevee Heroes", 38000),
  new productoTCG("Pokémon | Caja 24 Sobres Soy y Luna", 50000),
  new productoTCG("Pokémon | Caja 36 Sobre Tempestad Plateada", 83000),
  new productoTCG("Pokémon | Caja 36 Sobres Resplandor Astral", 83000),
  new productoTCG("Pokémon | Caja 36 Sobres Fusion Strike", 77000),
  new productoTCG("Pokémon | Caja 18 Sobres Darkness Ablaze ", 43000),
  new productoTCG("Pokémon | Caja 18 Evoluciones en Paldea", 43000),
  new productoTCG("Pokémon | Caja 20 Sobres 151 2023", 37000),
  new productoTCG("Pokémon | Caja 36 Sobres Battle Styles", 80000),
  new productoTCG("Pokémon | Caja 36 Llamas Obsidiana", 80000),
];

let productosPokemonComprados = [];
let nombreCliente = null;

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

menuUsuario();

function solicitarValor(promptMensaje) {
  let valor = prompt(promptMensaje);

  while (!valor || isNaN(valor)) {
    alert("¡Debe ingresar un valor numérico!");
    valor = prompt(promptMensaje);
  }

  return parseFloat(valor);
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
    let nombreProducto = prompt("Ingrese el nombre del producto");
    let precioProducto = null;

    while (precioProducto === null) {
      let precioIngresado = prompt("Ingrese el precio del producto:");
      precioProducto = parseFloat(precioIngresado);

      if (isNaN(precioProducto) || precioProducto < 1) {
        alert("El precio ingresado no es válido. Por favor, ingrese un número.");
        precioProducto = null;
      }
    }

    listaProducto.push({
      nombre: nombreProducto,
      precio: precioProducto,
    });

    alert("Producto agregado");

    let opcion = solicitarValor(
      "¿Desea agregar otro producto?\n\r1. Sí\n2. Volver al menú principal del mantenimiento"
    );
    if (opcion !== 1) {
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

  let cantidadProductos = parseInt(
    prompt("Ingrese la cantidad de productos que desea comprar:")
  );

  while (cantidadProductos < 1 || cantidadProductos > listaProductos.length) {
    cantidadProductos = parseInt(
      prompt(
        "Cantidad inválida, solo puede comprar una unidad por producto. Ingrese la cantidad de productos que desea comprar:"
      )
    );
  }

  for (let i = 0; i < cantidadProductos; i++) {
    let numeroProducto = parseInt(
      prompt(`Ingrese el número del producto: \n\n${mensajeProductos}`)
    );
    while (numeroProducto < 1 || numeroProducto > listaProductos.length) {
      numeroProducto = parseInt(
        prompt(
          `Número inválido. Ingrese el número del producto #${
            i + 1
          }:\n\n${mensajeProductos}`
        )
      );
    }
    let producto = listaProductos[numeroProducto - 1];
    let cantidadDeseada = parseInt(
      prompt(`Ingrese la cantidad deseada de "${producto.nombre}":`)
    );

    while (isNaN(cantidadDeseada) || cantidadDeseada < 1) {
      cantidadDeseada = parseInt(
        prompt(
          `Cantidad inválida. Ingrese la cantidad deseada de "${producto.nombre}":`
        )
      );
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
    mensajeCompra += `${i + 1}. ${producto.nombre} - Cantidad: ${
      producto.cantidad
    } - $${producto.precio * producto.cantidad}\n`;
  }
  mensajeCompra += `\nPrecio total: $${precioTotal}`;

  mensajeCompra += `\n\rFecha y hora de la compra: ${new Date().toLocaleString()}`;

  while (true) {
    let opcion = solicitarValor(
      "Seleccione una opción:\n\r1. Ver el resumen de compra\n2. Agregar más productos\n3. Regresar al menu principal"
    );

    switch (opcion) {
      case 1:
        let mensajeFinal = "+-----------------------+\n";
        mensajeFinal += "|   Resumen de Compra   |\n";
        mensajeFinal += "+-----------------------+\n";
        mensajeFinal += mensajeCompra + "\n";
        mensajeFinal += "+-----------------------+";
        alert(mensajeFinal);
        break;

      case 2:
        comprar();
        break;

      case 3:
        alert("¡Hasta luego!");
        return;

      default:
        alert("Opción inválida.");
        break;
    }
  }
}