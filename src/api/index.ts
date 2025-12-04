import axios from 'axios';

export interface Review {
  id: string | number;
  rating: number;
  reviewsCount: number;
  avatar: string;
  dateCreated: string | number;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const REVIEWS_URL = `${BASE_URL}/reviews`;
const REVIEW_DETAIL_URL = (id: string | number) => `${REVIEWS_URL}/${id}`;

export function getReviews(): Promise<Review[]> {
  return axios.get(REVIEWS_URL).then(response => response.data);
}

export function getReviewDetail(id: string | number): Promise<Review> {
  return axios.get(REVIEW_DETAIL_URL(id)).then(response => response.data);
}
