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
  // Pre-fill the form with current data
  const [updatedData, setUpdatedData] = useState<StatsData>(currentData);
  const [errors, setErrors] = useState<{ rank?: string; percentile?: string }>({
    rank: "",
    percentile: "",
  });

  const validate = () => {
    const newErrors: { rank?: string; percentile?: string } = {};

    if (
      updatedData.rank === undefined ||
      updatedData.rank === null ||
      isNaN(updatedData.rank)
    ) {
      newErrors.rank = "Required | Should be a valid number";
    }

    if (
      updatedData.percentile === undefined ||
      updatedData.percentile === null ||
      isNaN(updatedData.percentile)
    ) {
      newErrors.percentile = "Required | Percentile 0-100";
    } else if (updatedData.percentile < 0 || updatedData.percentile > 100) {
      newErrors.percentile = "Percentile should be between 0 and 100";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newValue = value === "" ? "" : parseInt(value);

    setUpdatedData((prevData) => ({
      ...prevData,
      [id]: newValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
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
          <AlertDialogTitle className="text-lg font-bold flex flex-row justify-between">
            <span>Update Scores</span>
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
                className="w-40 appearance-none"
                value={updatedData.rank || ""}
                onChange={handleChange}
              />
            </div>
            {errors.rank && (
              <span className="text-red-600 text-sm">{errors.rank}</span>
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
                className="w-40 appearance-none"
                value={updatedData.percentile || ""}
                onChange={handleChange}
              />
            </div>
            {errors.percentile && (
              <span className="text-red-600 text-sm">{errors.percentile}</span>
            )}
          </div>

          {/* Current Score Input */}
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
              className="w-40 appearance-none"
              value={updatedData.score || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <AlertDialogFooter className="gap-4">
          <AlertDialogCancel className="text-blue-900 border border-black px-8 py-4">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="px-8 py-4 gap-4 text-white bg-blue-900 rounded hover:bg-blue-700"
            onClick={handleSubmit}
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
