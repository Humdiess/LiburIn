export interface Category {
    id: number;
    name: string;
    slug: string;
}
  
export interface Place {
    id: number;
    name: string;
    photo: string;
    slug: string;
    category: Category;
    description: string;
}