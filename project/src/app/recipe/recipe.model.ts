export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  imageUrl?: string;
}