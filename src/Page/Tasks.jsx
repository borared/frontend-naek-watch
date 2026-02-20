import React from "react";
import tasks from "../data/tasks";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-black text-white pt-10 px-8">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-red-600">
          NaekWatch Missions
        </h1>
        <p className="text-gray-400 mt-3 text-lg font-Kantumruy">
          បំពេញបេសកកម្មដើម្បីរកពិន្ទុ 🎯
        </p>
      </div>

      {/* Task Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map((task) => {
          const completed = task.progress >= task.total;
          const progressPercent =
            (task.progress / task.total) * 100;

          return (
            <div
              key={task.id}
              className="bg-neutral-900 rounded-2xl p-6 border border-white/10  transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">
                {task.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                {task.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-800 rounded-full h-3 mb-3">
                <div
                  className="bg-red-600 h-3 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center text-sm mb-4">
                <span>
                  {task.progress} / {task.total}
                </span>
                <span className="text-yellow-400 font-bold">
                  {task.reward} PTS
                </span>
              </div>

              <button
                disabled={!completed}
                className={`w-full py-2 rounded-lg font-semibold transition-all ${
                  completed
                    ? "bg-red-600 hover:bg-red-700 hover:cursor-pointer"
                    : "bg-gray-700 cursor-not-allowed"
                }`}
              >
                {completed ? "Claim Reward" : "In Progress"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="h-20"></div>
    </div>
  );
}
