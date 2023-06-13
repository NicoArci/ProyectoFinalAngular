import { Component } from '@angular/core';
import{faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

interface Product {
  id: number;
  title: string;
  price: number;
  info: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  
  CartIcon = faCartShopping;
  products: 
  
  Product[] = [
    {
      id: 1,
      title: "Contabilidad Mensual para Empresas",
      price: 6009,
      info: "Detalles: Lorem ipsum",
      image: "../../../assets/images/Contabilidad mensual para empresas.png",
    },
    {
      id: 2,
      title: "Contabilidad para Personas Físicas",
      info: "Detalles: Lorem ipsum",
      price: 4013,
      image: "../../../assets/images/Contabilidad Mensual para Personas Físicas con Actividad Empresarial.png",
    },
    {
      id: 3,
      title: "Contabilidad Mensual para Hosts Airbnb",
      price: 6500,
      info: "Detalles: Lorem ipsum",
      image: "../../../assets/images/Contabilidad Mensual para Hosts Airbnb.png",
    },
    // Agrega más productos aquí...
  ];


  cart: CartItem[] = [];
  constructor(private library: FaIconLibrary){
    library.addIcons(faCartShopping)
  }
  addtocart(product: Product) {
    const itemIndex = this.cart.findIndex(item => item.id === product.id);

    if (itemIndex > -1) {
      this.cart[itemIndex].quantity++;
    } else {
      const cartItem: CartItem = { ...product, quantity: 1 };
      this.cart.push(cartItem);
    }
  }

  getTotal(): number {
    let total = 0;
    for (const item of this.cart) {
      total += item.price * item.quantity;
    }
    return total;
  }
}

