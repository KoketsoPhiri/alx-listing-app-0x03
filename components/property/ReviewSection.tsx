// components/property/ReviewSection.tsx
import React from 'react';
import { Review } from '@/interfaces'; // Import Review interface

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6">Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet. Be the first to leave one!</p>
      ) : (
        <div className="grid gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex items-center mb-2">
                <img
                  src={review.avatar}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-300"
                />
                <div>
                  <p className="font-bold text-lg">{review.userName}</p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">{review.rating} stars</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
              <p className="text-gray-500 text-sm mt-1">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;