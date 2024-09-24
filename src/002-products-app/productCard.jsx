import { Link } from "react-router-dom";

export default function ProductCard({ product, slog }) {
  return (
    <div className="flex-col grid-child relative">
      <img
        src={product.images[0]}
        alt={product.name}
        className="max-h-44 object-cover"
      />
      <Link to={`/products/${slog}`} target="_blank" className="text-lg font-semibold stretched-link">{product.name}</Link>
      <p className="text-sm">{product.description}</p>
    </div>
  );
}
