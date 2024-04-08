import React from 'react';
import StarRatings from 'react-star-ratings';

interface CardProps {
    lessonName: string;
    flashcardCount: number;
    rating: number;
    creatorName: string;
    creatorAvatar: string;
    numberOfRating: number;
}

const Card: React.FC<CardProps> = ({
    lessonName,
    flashcardCount,
    rating,
    creatorName,
    creatorAvatar,
    numberOfRating,
}) => {
    return (
        <div className='p-3'>
            <div className='h-full bg-[#064580] border-opacity-60 rounded-lg overflow-hidden p-3 flex flex-col w-96 h-44'>
                <h6 className='text-white text-sm font-semibold mr-auto ml-1 mb-2'>{lessonName}</h6>
                <div className='flex flex-row mb-12'>
                    <p className='text-black text-sm bg-white text-black rounded-full p-1 font-semibold'>{flashcardCount} thuật ngữ </p>
                    <span className='ml-auto flex flex-row'>
                    <StarRatings
                        rating={rating}
                        starRatedColor='#FFD700'
                        numberOfStars={5}
                        name='rating'
                        starDimension='15px'
                        starSpacing='1px'
                    />
                    <p className='text-white text-sm font-normal mt-1 ml-1'>({numberOfRating} đánh giá)</p>
                    </span>
                    
                </div>
                <div className='flex flex-row items-center'>
                    <img src={creatorAvatar} alt='avatar' className='w-8 h-8 rounded-full' />
                    <p className='text-white text-sm ml-3 font-normal'>{creatorName}</p>
                </div>
            </div>
        </div>
            
    );
};

export default Card;