import React from 'react';
import ProductCard from './productCard';
// import products from "./data.json";
import {data} from "./data";
import { Helmet } from 'react-helmet';
import { WEBSITE_TITLE } from '../constants';

export default function ProductsApp() {
  const slog = (name="") => name.replace(" ", "_").toLowerCase();

  return (
    <>
      <Helmet>
        <title>002 Products App || {WEBSITE_TITLE}</title>
      </Helmet>
      <div className='container'>
        <h1 className='text-2xl font-semibold capitalize text-center my-4'>our shop products</h1>
        <div className="grid-parent">
          {data.map((product) => (
            <ProductCard key={product.slog} product={product} slog={slog(product.name)} />
          ))}
        </div>
      </div>
    </>
  );
};
