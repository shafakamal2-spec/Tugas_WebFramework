import { getTodos } from '@/lib/todos';
import TodoList from './components/TodoList';

export default async function HomePage() {
  const todos = await getTodos();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Daftar Tugas
        </h1>

        <TodoList todos={todos} />
      </div>
    </main>
  );
}