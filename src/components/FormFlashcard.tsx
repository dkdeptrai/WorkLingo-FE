import React, { useState } from "react";
import userService from "../services/user.service";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { LessonsType } from "../models/LessonsType";
import authService from "../services/auth.service";
import { FlashcardType } from "../models/FlascardType";

interface RecentOrdersTableProps {
  userdata: FlashcardType;
}

const FormFlashcard: React.FC<RecentOrdersTableProps> = ({ userdata }) => {
  const [answer, setAnswer] = useState(userdata.answer);
  const [question, setQuestion] = useState(userdata.question);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("answer", answer);
    formData.append("question", question);

    const topicId = userdata.id;

    try {
      const response = await userService.updateFlashcard(topicId, formData);
      console.log("Topic updated successfully", response);
      alert("Topic updated successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error updating topic:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Topic
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Question
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="username"
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Answer
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  onChange={(e) => setAnswer(e.target.value)}
                  value={answer}
                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormFlashcard;
