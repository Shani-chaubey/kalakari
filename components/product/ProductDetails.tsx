"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import ProductTab from "./ProductTab";
import BuyNowBtn from "../buttons/BuyNowBtn";
import AddToCartBtn from "../buttons/AddToCartBtn";
import ProductQuantityChange from "./ProductQuantityChange";
import RatingReview from "../others/RatingReview";
import ProductDescription from "./ProductDescription";
import ProductColorSelection from "./ProductColorSelection";
import { Product } from "@/types";
import Link from "next/link";
import { calculateDiscount } from "@/lib/calculateDiscount";
import { ArrowRight } from "lucide-react";

const ProductDetails = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="space-y-2 mt-2">
      {/* Category */}
      <Link
        href={`/shop?category=${product.category}`}
        className="bg-lime-500 py-1 px-4 rounded-full w-fit"
      >
        {product?.category}
      </Link>
      {/* Product Name */}
      <h2 className="text-2xl md:text-3xl font-bold capitalize">
        {product?.name}
      </h2>
      {/* Rating and Review */}
      <RatingReview
        rating={product?.rating || 0}
        review={product?.reviews.length || 0}
      />
      {/* Product Description */}
      <ProductDescription description={product?.description as string} />

      {/* product stock */}
      <div>
        {product.stockItems === 0 ? (
          <p className="text-lg  w-fit rounded-md text-muted-foreground">
            out of stock
          </p>
        ) : (
          <p className="text-lg w-fit rounded-md text-muted-foreground">
            Only{" "}
            <span className="text-lg text-black dark:text-white">
              ({product.stockItems})
            </span>{" "}
            items in stock
          </p>
        )}
      </div>
      {/* product colors */}
      {/* <ProductColorSelection
        color={selectedColor}
        setColor={setSelectedColor}
        allColors={product.color!}
      /> */}

      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-2">
          {/* Original Price */}
          {/* <p className="text-muted-foreground line-through text-2xl">
            ${product?.price}
          </p> */}
          <div className="text-lg font-bold space-x-2 my-2 ">
            <span className="line-through text-muted-foreground">₹{product.price}</span>
            <span className="text-xl font-bold text-green-500">
              ₹{calculateDiscount(product.price, product.discount)}
            </span>
          </div>
          {/* <div className="flex items-center gap-4">
            
            <p className="text-3xl font-bold text-green-500 border-green-500 border py-2 px-6 rounded-lg">
              ${calculateDiscount(product.price, product.discount)}
            </p>
            <ProductQuantityChange
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 !my-6">
        {/* Add To Cart Button */}
        {/* <AddToCartBtn product={{ ...product, quantity, selectedColor }} /> */}
        {/* Buy Now Button */}
        <a
          href="tel:+919005722709"
          className="bg-gradient-to-r from-blue-500 to-blue-800
           hover:bg-blue-500 hover:ring-2  duration-300 text-white text-xl px-6 py-2 rounded-full
           w-auto flex items-center gap-4"
        >
          <ArrowRight size={30} className="animate-pulse" /> Buy Now
        </a>
        {/* <BuyNowBtn product={{ ...product, quantity, selectedColor }} /> */}
      </div>
      {/* Separator */}
      <Separator className="!mt-4" />
      {/* Product Tab */}
      <ProductTab aboutItem={product?.aboutItem!} reviews={product?.reviews} />
    </div>
  );
};

export default ProductDetails;
