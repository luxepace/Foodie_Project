export interface Recipe {
    id: number;
    title: string;
    tags: string;
    user: {
      id: number;
      name: string;
      date: string;
      image: string;
    };
    image: string;
    body: string;
    timeCooking: number;
    favorite: true;
  
    foodValue?: {
      calories: number;
      fats: number;
      carbohydrates: number;
      belki: number;
    };
    comments?: ResipeComment[];
    additionalInformation?: {
      ingredients: string[];
      details: ResipeDetail[];
    };
  }
  export interface ResipeComment {
    postId: number;
    id: number;
    body: string;
    user: {
      id: number;
      username: string;
    };
    dateCreated: Date;
  }
  export interface ResipeDetail {
    title: string;
    body: string;
  }