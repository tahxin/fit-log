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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
                        <div className="w-full h-48 bg-neutral-800"></div>
                        <div className="p-4 space-y-3">
                            <div className="flex gap-2">
                                <div className="h-5 w-16 bg-neutral-800 rounded-full"></div>
                                <div className="h-5 w-20 bg-neutral-800 rounded-full"></div>
                            </div>
                            <div className="h-6 w-3/4 bg-neutral-800 rounded"></div>
                            <div className="h-4 w-1/2 bg-neutral-800 rounded"></div>
                            <div className="border-t border-neutral-800 pt-3 flex gap-4">
                                <div className="h-4 w-16 bg-neutral-800 rounded"></div>
                                <div className="h-4 w-16 bg-neutral-800 rounded"></div>
                                <div className="h-4 w-16 bg-neutral-800 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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