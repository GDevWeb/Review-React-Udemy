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
  const [detailNumberItem, setDetailNumberArticle] = useState(0);

  // totalHT for allArticle :
  const [totalHT, setTotalHT] = useState(0);

  // Set the TVA:
  const [TVA, setTVA] = useState(0);

  // Total:
  const [totalTTC, setTotalTTC] = useState(0);

  // Filter:

  const [filteredList, setFilteredList] = useState([]);

  // Name :
  const [filterByItemName, setFilterByItemName] = useState("");

  // Category:
  const [categoryItem, setCategoryItem] = useState("tout");

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
  const removeItemFromCart = (
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
      // 3.d. Remove 1 quantity of the selected item
      updatedCart[itemIndex].quantity -= 1;
      // 3.e. Set Cart on updatedCart :
      setCart(updatedCart);
    }
  };

  // 4.Remove all quantity for the selected item :
  const resetItemFromCart = (
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
    //5.2 TotalHT by article :
    let evalHT = 0;
    cart.forEach((item) => {
      const totalHTByItem = item.price * item.quantity;
      evalHT += totalHTByItem;
    });
    setTotalHT(evalHT);
    // 5.3 T.V.A:
    let actualTVA = 5.5;
    setTVA(actualTVA);
    // 5.4 Total T.T.C:
    let total = (totalHT * TVA).toFixed(2);
    setTotalTTC(total);
  }, [cart, totalHT, TVA]);

  /* 

6. Filter :


 */

  //6.1 by category :
  const onFilteredCategory = (e) => {
    const value = e.target.value;
    setCategoryItem(value);
    console.log(value);
  };

  //6.2 by name :
  const onFilteredName = (e) => {
    const value = e.target.value;
    setFilterByItemName(value);
    console.log(value);
  };

  // 6.3 function filter :
  const filter = () => {
    // Convert the name into lowerCase :
    const filterByName = filterByItemName.toLowerCase();

    // Filter the list while the search name and category
    const filteredArticleList = articleList.filter((item) => {
      // Check if the inputted name contents the characters who into the initial list
      const nameMatch = item.productName[1]
        .toLowerCase()
        .includes(filterByName);

      // Check if the category matches with the selected category
      const categoryMatch =
        categoryItem === "tout" || item.category === categoryItem;

      // Returns true or false if the two conditions are checked:
      return nameMatch && categoryMatch;
    });

    // Updated the filteredArticleList with the FilteredList:
    setFilteredList(filteredArticleList);
  };

  useEffect(() => {
    console.log(filteredList);
  }, [filteredList]);

  // 3.Render:
  return (
    <div id="container" className="shoppingCart">
      <div id="filter">
        <label htmlFor="itemName">Nom</label>
        <input
          type="text"
          name="itemName"
          id="itemName"
          value={filterByItemName}
          onChange={onFilteredName}
        />
        <label htmlFor="itemCategory">Tout</label>
        <input
          type="radio"
          name="category"
          value="tout"
          id="itemCategory"
          checked={categoryItem === "tout"}
          onChange={onFilteredCategory}
        />
        <label htmlFor="itemCategory">Fruit</label>
        <input
          type="radio"
          name="category"
          value="fruit"
          id="itemCategory"
          checked={categoryItem === "fruit"}
          onChange={onFilteredCategory}
        />
        <label htmlFor="itemCategory">Légume</label>
        <input
          type="radio"
          name="category"
          value="légume"
          id="vegetable"
          checked={categoryItem === "légume"}
          onChange={onFilteredCategory}
        />
        <button
          type="button"
          aria-label="bouton recherché par nom de produit"
          className="btn search"
          onClick={filter}
        >
          Chercher
        </button>
      </div>
      <ul id="list">
        {filteredList.length > 0
          ? filteredList.map((item) => {
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
                          removeItemFromCart(
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
                          resetItemFromCart(
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
            })
          : articleList.map((item) => {
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
                          removeItemFromCart(
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
                          resetItemFromCart(
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
      <div id="container" className="resumeCart">
        <div className="logo">🛒</div>
        <p className="resumeCart detail advice">
          Nombre d'articles : <span>{cart.length}</span>
        </p>
        <p className="resumeCart detail advice">
          Nombre total d'articles : <span>{detailNumberItem}</span>
        </p>
        <p className="resumeCart detail advice">
          Total HT : <span>{totalHT}</span>€
        </p>
        <p className="resumeCart detail advice">
          TVA : <span>{TVA}</span>%
        </p>
        <p className="resumeCart detail advice">
          Total T.T.C : <span>{totalTTC}</span>€
        </p>
      </div>
    </div>
  );
}

export default ShoppingCart;
