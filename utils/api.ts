import { Category, Place } from "./types";

const BASE_URL = 'https://dewalaravel.com';

export const fetchPlaces = async (): Promise<Place[]> => {
  const response = await fetch(`${BASE_URL}/api/places`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const jsonData = await response.json();
  return jsonData.data.map((item: any) => ({
    id: item.id,
    name: item.name,
    photo: item.photo,
    slug: item.slug,
    category: item.category,
  }));
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}/api/categories`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const jsonData = await response.json();
  return jsonData.data.map((item: any) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
  }));
}

export const fetchPlaceDetail = async (slug: string): Promise<Place> => {
  const response = await fetch(`${BASE_URL}/api/places/${slug}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const jsonData = await response.json();
  return {
    id: jsonData.data.id,
    name: jsonData.data.name,
    photo: jsonData.data.photo,
    slug: jsonData.data.slug,
    description: jsonData.data.description,
    category: jsonData.data.category,
  };
};

export const fetchPlacesByCategory = async (categorySlug: string): Promise<Place[]> => {
  const response = await fetch(`${BASE_URL}/api/places?category=${categorySlug}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const jsonData = await response.json();
  return jsonData.data.map((item: any) => ({
    id: item.id,
    name: item.name,
    photo: item.photo,
    slug: item.slug,
    category: item.category,
  }));
};

export { Place, Category };
