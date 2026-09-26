'use client';

import React, { useEffect, useState } from 'react';
import WorkOutCard from './workoutcard';
import ExerciseType from '../../types/workoutdatatypes';

const WorkOutCards = () => {
    const [workouts, setWorkouts] = useState<ExerciseType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.abcz.workers.dev/api/fitlog')
            .then(response => response.json())
            .then(data => {
                setWorkouts(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <span className="loading loading-spinner loading-lg text-lime-400"></span>
                <p className="text-gray-400 mt-4 text-lg">Loading workouts…</p>
            </div>
        );
    }

    return (
        <div className="m-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout) => (
                <WorkOutCard
                    key={workout.id}
                    id={workout.id}
                    image={workout.image}
                    tags={workout.muscleGroups}
                    title={workout.name}
                    equipment={workout.equipment}
                    duration={`${workout.duration} mins`}
                    calories={`${workout.caloriesBurned} kcal`}
                    rating={workout.rating}
                />
            ))}
        </div>
    );
};

export default WorkOutCards;