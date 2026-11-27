// Edite aqui os 6 produtos da semana. Deixe affiliateLink vazio enquanto não houver link real.
export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  affiliateLink: string;
  description: string;
  highlight?: boolean;
  isExample?: boolean;
};

const placeholder = (n: number) =>
  `https://placehold.co/600x600/f4f1ea/888?text=Produto+${n}`;

export const products: Product[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: `exemplo-${n}`,
  name: `Produto exemplo ${n}`,
  image: placeholder(n),
  price: 99.9,
  ...(n % 2 === 1 ? { oldPrice: 149.9 } : {}),
  affiliateLink: "",
  description: "Espaço reservado para a oferta real desta semana.",
  highlight: n === 1,
  isExample: true,
}));

export const discountPercent = (price: number, oldPrice?: number) =>
  oldPrice && oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : null;

export const formatBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
