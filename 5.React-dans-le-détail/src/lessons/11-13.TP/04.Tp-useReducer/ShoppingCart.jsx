import { useEffect, useState } from "react";
import articlesList from "./Components/articlesList";
import "./styles/Cart.css";

import React from "react";

function ShoppingCart() {
  // 1.State :
  const [articleList, setArticleList] = useState(articlesList);

  // 1.b. Create a state for Cart :
  const [cart, setCart] = useState([]);

  // States for calcul :
  // Detail number of quantity article by item:
  const [detailNumberItem, setDetailNumberArticle] = useState();

  // totalHT for allArticle :
  const [totalHT, setTotalHT] = useState(0);

  // Set the TVA:
  const [TVA, setTVA] = useState(0);

  // Total:
  const [totalTTC, setTotalTTC] = useState(0);

  // Check the state of cart after a new State:
  useEffect(() => {
    console.log("Check Cart", cart);
  }, [cart]);

  // 2.Behavior:

  // 2.a. Add item to cart :
  const addItemToCart = (
    itemId,
    itemName,
    itemCategory,
    itemOrigin,
    itemPrice
  ) => {
    console.log(
      "Article ajouté au panier",
      itemId,
      itemName[1],
      itemCategory,
      itemOrigin[1],
      itemPrice
    );

    // 1.check if the item is already present into the Cart
    const itemIsPresent = cart.find((item) => itemId === item.id);

    // 2.Condition action :

    if (!itemIsPresent) {
      // 2.a Create an object:
      // for the newItem:
      const newItem = {
        id: itemId,
        productName: itemName,
        category: itemCategory,
        origin: itemOrigin,
        price: itemPrice,
        quantity: 1,
      };

      // 2.b. ShallowCopy of Cart:
      const copyCart = [...cart];

      // 2.c. Add newItem into copyCart:
      copyCart.push(newItem);
      // 2.d. Set Cart on the CopyCart:
      setCart(copyCart);
    } else {
      //2.c. Find the existing item into Cart :
      const itemIndex = cart.findIndex((item) => itemId === item.id);

      // 2.e.Updated quantity :
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;

      // 2.f. Update Cart with the new quantity:
      setCart(updatedCart);
    }
  };

  // 3.Remove one quantity of the selected item:
  const removeArticleFromCart = (
    itemId,
    itemName,
    itemCategory,
    itemOrigin,
    itemPrice
  ) => {
    console.log(
      "Article retiré du panier",
      itemId,
      itemName[1],
      itemCategory,
      itemOrigin[1],
      itemPrice
    );

    // 3.a.Check if the item is present into Cart:
    const existingItem = cart.find((item) => itemId === item.id);
    const itemIndex = cart.findIndex((item) => itemId === item.id);

    // 3.b if the item exists :
    if (existingItem) {
      // 3.c. create a shallow copy of cart
      const updatedCart = [...cart];
      // 3.d. i remove 1 quantity of the selected item
      updatedCart[itemIndex].quantity -= 1;
      // 3.e. Set Cart on updatedCart :
      setCart(updatedCart);
    }
  };

  // 4.Remove all quantity for the selected item :
  const resetArticleFromCart = (
    itemId,
    itemName,
    itemCategory,
    itemOrigin,
    itemPrice
  ) => {
    console.log(
      "Article supprimé du panier",
      itemId,
      itemName[1],
      itemCategory,
      itemOrigin[1],
      itemPrice
    );

    // 4.a. Check if the selected item is present into Cart :
    const existingItem = cart.find((item) => itemId === item.id);

    // 4.b If the selected item is present into Cart :
    if (existingItem) {
      // 4.b.1. Create a shallowCopy of Cart to remove the selected article
      const updatedCart = cart.filter((item) => itemId !== item.id);

      // 4.b.2 Set the Cart with the updatedCart:
      setCart(updatedCart);
    }
  };

  // 5. Calculs :
  // 5.1. Detail quantity by article :
  useEffect(() => {
    let evalDetailItem = 0;
    cart.forEach((item) => {
      const totalDetailByItem = item.quantity;
      evalDetailItem += totalDetailByItem;
    });
    setDetailNumberArticle(evalDetailItem);
  }, [cart]);

  //5.2 TotalHT by article :
  useEffect(() => {
    let evalHT = 0;
    cart.forEach((item) => {
      const totalHTByItem = item.price * item.quantity;
      evalHT += totalHTByItem;
    });
    setTotalHT(evalHT);
  }, [cart]);

  // 5.3 T.V.A:
  useEffect(() => {
    let actualTVA = 5.5;
    setTVA(actualTVA);
  }, [cart]);

  // 5.4 Total T.T.C:
  useEffect(() => {
    let total = (totalHT * TVA).toFixed(2);
    setTotalTTC(total);
  }, [totalHT, TVA]);

  // 3.Render:
  return (
    <div id="container ShoppingCart">
      <div id="filter">
        <p>filter</p>
      </div>
      <ul id="list">
        {articleList.map((item) => {
          return (
            <li key={item.id} className="item">
              <figure className="item picture">
                <img
                  src={item.picture}
                  alt={item.productName}
                  className="img item"
                />
              </figure>
              <div className="item detail">
                <p className="item name">{item.productName[1]}</p>
                <p className="item origin">Origine: {item.origin[1]}</p>
                <p className="item package">Package {item.package}</p>
                <p className="item price">Prix : {item.price}€</p>
                <div className="item buttonGroup">
                  <button
                    aria-label="bouton ajouter article"
                    className="btn add"
                    onClick={() =>
                      addItemToCart(
                        item.id,
                        item.productName[1],
                        item.category,
                        item.origin[1],
                        item.price
                      )
                    }
                  >
                    Ajouter ➕ 1
                  </button>
                  <button
                    aria-label="bouton retirer article"
                    className="btn remove"
                    onClick={() =>
                      removeArticleFromCart(
                        item.id,
                        item.productName,
                        item.origin,
                        item.price
                      )
                    }
                  >
                    Retirer ➖ 1
                  </button>
                  <button
                    aria-label="bouton retirer tous les articles"
                    className="btn reset"
                    onClick={() =>
                      resetArticleFromCart(
                        item.id,
                        item.productName,
                        item.origin,
                        item.price
                      )
                    }
                  >
                    Reset 🚮
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div id="container ResumeCart">
        <p>Nombre d'articles : {cart.length}</p>
        <p>Nombre total d'articles : {detailNumberItem}</p>
        <p>Total HT {totalHT}€</p>
        <p>TVA {TVA}%</p>
        <p>Total T.T.C {totalTTC}€</p>
      </div>
    </div>
  );
}

export default ShoppingCart;
