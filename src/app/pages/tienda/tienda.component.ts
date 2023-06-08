import { Component } from '@angular/core';
<<<<<<< HEAD
interface Product {
  id: number;
  title: string;
  price: number;
  info?: string;
  image: string;
}
=======
>>>>>>> c51d3afe987a1a285948311e8b938009e496d1ee

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
<<<<<<< HEAD
  
})
export class TiendaComponent {
  product: Product[] = [
    {
      id: 1,
      title: "Contabilidad Mensual para Empresas",
      price: 6009,
      info: "Detalles: Lorem impsum",
      image: "https://cdn.shopify.com/s/files/1/0549/3217/7072/products/contabilidad-persona-moral_large.jpg?v=1622761732"
    },
    {
      id: 2,
      title: "Contabilidad Mensual para Personas Físicas",
      info: "Detalles: Lorem impsum",
      price: 4013,
      image: "https://cdn.shopify.com/s/files/1/0549/3217/7072/products/contabilidad-PF-otros-actividad-empresarial_large.jpg?v=1622761869"
    },
    {
      id: 3,
      title: "Contabilidad Mensual para Hosts Airbnb",
      info: "Detalles: Lorem impsum",
      price: 1560,
      image: "https://cdn.shopify.com/s/files/1/0549/3217/7072/products/Contabilidad-Host-Airbnb_large.jpg?v=1621379474"
    }
  ];

  categories: Product[] = [...new Set(this.product.map((item) => {
    return item;
  }))];

  i = 0;
  cart: Product[] = [];

  addToCart(a: number) {
    this.cart.push({ ...this.categories[a] }); // Agrega el producto seleccionado al carrito
    this.displayCart();
  }

  deleteElement(a: number) {
    this.cart.splice(a, 1); // Elimina un elemento del carrito
    this.displayCart();
  }

  displayCart() {
    let j = 0;
    let total = 0;
    const countElement = document.getElementById("count");
    const cartItemElement = document.getElementById("cartItem");
    const totalElement = document.getElementById("total");

    if (countElement && cartItemElement && totalElement) {
      countElement.innerHTML = this.cart.length.toString(); // Muestra la cantidad de elementos en el carrito

      if (this.cart.length === 0) {
        cartItemElement.innerHTML = "Your cart is empty"; // Muestra un mensaje si el carrito está vacío
        totalElement.innerHTML = "$ 0.00"; // Muestra el total como $ 0.00
      } else {
        cartItemElement.innerHTML = this.cart.map((items) => {
          const { image, title, price } = items;
          total += price; // Calcula el total acumulado de los precios de los productos en el carrito
          totalElement.innerHTML = "$ " + total + ".00"; // Muestra el total acumulado del carrito
          return (
            `<div class='cart-item'>
              <div class='row-img'>
                <img class='rowimg' src=${image}>
              </div>
              <a href='../paginas/Pago.html'>
                <i class='fas fa-shopping-cart'></i> <!-- Icono del carrito de compras -->
              </a>
              <i class='fa-solid fa-trash' (click)='deleteElement(${j++})'></i> <!-- Icono de la papelera para eliminar el elemento del carrito -->
              <p style='font-size: 19px;'>${title}</p> <!-- Muestra el título del producto en el carrito -->
              <h2 style='font-size: 19px;'>$ ${price}.00</h2> <!-- Muestra el precio del producto en el carrito -->
            </div>`
          );
        }).join('');
      }
    }
  }
=======
})
export class TiendaComponent {

>>>>>>> c51d3afe987a1a285948311e8b938009e496d1ee
}
