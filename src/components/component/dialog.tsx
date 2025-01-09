"use client";

import { useState, ChangeEvent } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaArrowRightLong } from "react-icons/fa6";

interface StatsData {
  rank: number;
  percentile: number;
  score: number;
}

interface DialogProps {
  currentData: StatsData;
  onClose: () => void;
  onSubmit: (updatedData: StatsData) => void;
}

const Dialog = ({ currentData, onClose, onSubmit }: DialogProps) => {
  const [updatedData, setUpdatedData] = useState<StatsData>(currentData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (id: string, value: string | number) => {
    const errors: Record<string, string> = {};

    if (id === "rank") {
      if (value === "" || isNaN(Number(value))) {
        errors.rank = "Required | Should be a number";
      }
    }

    if (id === "percentile") {
      const percentileValue = Number(value);
      if (
        value === "" ||
        isNaN(percentileValue) ||
        percentileValue < 0 ||
        percentileValue > 100
      ) {
        errors.percentile = "Required | percentile 0-100";
      }
    }
    if (id === "score") {
      const numericValue = Number(value);
      if (
        value === "" ||
        isNaN(numericValue) ||
        numericValue < 0 ||
        numericValue > 15
      ) {
        errors.score = "Required | Should be a number between 0 and 15";
      }
    }

    return errors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const newValue = value === "" ? "" : Number(value);

    setUpdatedData((prevData) => ({
      ...prevData,
      [id]: newValue,
    }));

    const fieldErrors = validateField(id, newValue);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: fieldErrors[id] || "",
    }));
  };
  const validate = () => {
    const newErrors: Record<string, string> = {}; // Dynamic keys with string values

    if (!updatedData.rank || isNaN(updatedData.rank)) {
      newErrors.rank = "Required | Should be a valid number";
    }

    if (
      updatedData.percentile === undefined ||
      isNaN(updatedData.percentile) ||
      updatedData.percentile < 0 ||
      updatedData.percentile > 100
    ) {
      newErrors.percentile = "Percentile should be between 0 and 100";
    }

    if (updatedData.score === undefined || isNaN(updatedData.score)) {
      newErrors.score = "Required | Should be a valid number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(updatedData);
    }
  };
  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="  flex items-center justify-between">
            <span className="text-2xl font-bold">Update Scores</span>
            <span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                alt="HTML5 Logo"
                className="w-8 h-8 mr-4"
              />
            </span>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="space-y-6 py-4">
          {/* Rank Input */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-800 rounded-full">
                1
              </div>
              <Label htmlFor="rank" className="flex-1 font-medium">
                Update your <span className="font-bold">Rank</span>
              </Label>
              <Input
                id="rank"
                type="number"
                className="w-40"
                value={updatedData.rank !== undefined ? updatedData.rank : ""}
                onChange={handleChange}
              />
            </div>
            {errors.rank && (
              <span className="text-red-600 text-sm flex justify-end">
                {errors.rank}
              </span>
            )}
          </div>

          {/* Percentile Input */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-800 rounded-full">
                2
              </div>
              <Label htmlFor="percentile" className="flex-1 font-medium">
                Update your <span className="font-bold">Percentile</span>
              </Label>
              <Input
                id="percentile"
                type="number"
                className="w-40"
                value={
                  updatedData.percentile !== undefined
                    ? updatedData.percentile
                    : ""
                }
                onChange={handleChange}
              />
            </div>
            {errors.percentile && (
              <span className="text-red-600 text-sm flex justify-end">
                {errors.percentile}
              </span>
            )}
          </div>

          {/* Current Score Input */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-6 h-6 text-white bg-blue-800 rounded-full">
                3
              </div>
              <Label htmlFor="score" className="flex-1 font-medium">
                Update your{" "}
                <span className="font-bold">Current Score (out of 15)</span>
              </Label>
              <Input
                id="score"
                type="number"
                className="w-40"
                value={updatedData.score !== undefined ? updatedData.score : ""}
                onChange={handleChange}
              />
            </div>
            {errors.score && (
              <span className="text-red-600 text-sm flex justify-end">
                {errors.score}
              </span>
            )}
          </div>
        </div>
        <AlertDialogFooter className="gap-4">
          <AlertDialogCancel
            onClick={onClose}
            className="text-blue-900 border border-black px-8 py-4"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleSubmit}
            className={`px-8 py-4 gap-4 text-white rounded ${
              Object.values(errors).some((error) => error)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-900 hover:bg-blue-700"
            }`}
            disabled={Object.values(errors).some((error) => error)}
            // className="px-8 py-4 gap-4 text-white bg-blue-900 rounded hover:bg-blue-700"
          >
            <span>Save</span>
            <span>
              <FaArrowRightLong className="text-sm" />
            </span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
