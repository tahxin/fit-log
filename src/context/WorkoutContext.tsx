'use client';

import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import Exercise from '@/types/workoutdatatypes';

interface WorkoutContextType {
  todayPlan: Exercise[];
  saved: Exercise[];
  completedIds: number[];
  addToPlan: (exercise: Exercise) => boolean;
  removeFromPlan: (id: number) => void;
  saveForLater: (exercise: Exercise) => boolean;
  removeFromSaved: (id: number) => void;
  toggleComplete: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  isCompleted: (id: number) => boolean;
  isPlanFull: boolean;
  planCount: number;
  savedCount: number;
  totalMinutes: number;
  totalCalories: number;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

const MAX_PLAN_SIZE = 5;
const STORAGE_KEY_PLAN = 'fitlog-today-plan';
const STORAGE_KEY_SAVED = 'fitlog-saved';
const STORAGE_KEY_COMPLETED = 'fitlog-completed';

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [todayPlan, setTodayPlan] = useState<Exercise[]>(() =>
    loadFromStorage<Exercise[]>(STORAGE_KEY_PLAN, [])
  );
  const [saved, setSaved] = useState<Exercise[]>(() =>
    loadFromStorage<Exercise[]>(STORAGE_KEY_SAVED, [])
  );
  const [completedIds, setCompletedIds] = useState<number[]>(() =>
    loadFromStorage<number[]>(STORAGE_KEY_COMPLETED, [])
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PLAN, JSON.stringify(todayPlan));
  }, [todayPlan]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(completedIds));
  }, [completedIds]);

  const isInPlan = useCallback(
    (id: number) => todayPlan.some((e) => e.id === id),
    [todayPlan]
  );

  const isSaved = useCallback(
    (id: number) => saved.some((e) => e.id === id),
    [saved]
  );

  const isCompleted = useCallback(
    (id: number) => completedIds.includes(id),
    [completedIds]
  );

  const isPlanFull = todayPlan.length >= MAX_PLAN_SIZE;

  const addToPlan = useCallback(
    (exercise: Exercise): boolean => {
      if (isInPlan(exercise.id)) return false;
      if (todayPlan.length >= MAX_PLAN_SIZE) return false;
      setTodayPlan((prev) => [...prev, exercise]);
      return true;
    },
    [isInPlan, todayPlan.length]
  );

  const removeFromPlan = useCallback((id: number) => {
    setTodayPlan((prev) => prev.filter((e) => e.id !== id));
    setCompletedIds((prev) => prev.filter((cid) => cid !== id));
  }, []);

  const saveForLater = useCallback(
    (exercise: Exercise): boolean => {
      if (isSaved(exercise.id)) return false;
      setSaved((prev) => [...prev, exercise]);
      return true;
    },
    [isSaved]
  );

  const removeFromSaved = useCallback((id: number) => {
    setSaved((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const toggleComplete = useCallback((id: number) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  }, []);

  const planCount = todayPlan.length;
  const savedCount = saved.length;

  const totalMinutes = useMemo(
    () => todayPlan.reduce((sum, e) => sum + e.duration, 0),
    [todayPlan]
  );

  const totalCalories = useMemo(
    () => todayPlan.reduce((sum, e) => sum + e.caloriesBurned, 0),
    [todayPlan]
  );

  const value = useMemo<WorkoutContextType>(
    () => ({
      todayPlan,
      saved,
      completedIds,
      addToPlan,
      removeFromPlan,
      saveForLater,
      removeFromSaved,
      toggleComplete,
      isInPlan,
      isSaved,
      isCompleted,
      isPlanFull,
      planCount,
      savedCount,
      totalMinutes,
      totalCalories,
    }),
    [
      todayPlan,
      saved,
      completedIds,
      addToPlan,
      removeFromPlan,
      saveForLater,
      removeFromSaved,
      toggleComplete,
      isInPlan,
      isSaved,
      isCompleted,
      isPlanFull,
      planCount,
      savedCount,
      totalMinutes,
      totalCalories,
    ]
  );

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

export function useWorkout(): WorkoutContextType {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
}
