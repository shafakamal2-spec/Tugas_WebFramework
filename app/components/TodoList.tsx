import React from 'react';
import Link from 'next/link';
import { Todo } from '@/types/todo';

type TodoListProps = {
  todos: Todo[];
};

export default function TodoList({
  todos,
}: TodoListProps) {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">
                ID: {todo.id}
              </p>

              <h2 className="text-xl font-semibold text-gray-800">
                {todo.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {todo.description}
              </p>

              <p className="text-sm text-gray-400 mt-3">
                Dibuat: {todo.createdAt}
              </p>
            </div>

            <span
              className={`shrink-0 px-3 py-1 text-sm font-semibold rounded-full ${
                todo.completed
                  ? 'bg-green-100 text-green-700'
                  : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {todo.completed
                ? '✓ Selesai'
                : '⌛ Belum Selesai'}
            </span>
          </div>

          <div className="mt-4">
            <Link
              href={`/task/${todo.id}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}