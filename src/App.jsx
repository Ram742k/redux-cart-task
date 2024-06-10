import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from './cartSlice';
import Cart from './components/Cart';
import './Cart.css';
function App() {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      quantity: 1,
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1",
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
      price: 899,
      quantity: 1,
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: 'https://m.media-amazon.com/images/I/61HHbO9NDFL.jpg',
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      quantity: 1,
      images: 'https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800',
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      quantity: 1,
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316894377/HW/EM/ZV/157629195/oppo-f19-pro-plus-5g-8-128gb-.jpg',
    },
    {
      id: 5,
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      quantity: 1,
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: 'https://5.imimg.com/data5/ZR/TV/HW/SELLER-57126529/huawei-p30-pro-6-gb-ram-plus-128-gb-rom-pearl-white-mobile-500x500.jpg',
    }
  ];

  useEffect(() => {
    dispatch(setCartItems(products));
  }, [dispatch]);

  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
