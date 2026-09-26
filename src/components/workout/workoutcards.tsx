'use client';

import React, { useEffect, useState } from 'react';
import WorkOutCard from './workoutcard';
import ExerciseType from '../../types/workoutdatatypes';

const WorkOutCards = () => {
    const [workouts, setWorkouts] = useState<ExerciseType[]>([]);

    useEffect(() => {
        fetch('https://api.abcz.workers.dev/api/fitlog')
            .then(response => response.json())
            .then(data => {
                setWorkouts(data);
            });
    }, []);

    return (
        <div className="m-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout, index) => (
                <WorkOutCard
                    key={index}
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