import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";
import { TaskCard } from "./Task";
import { TaskType } from "@/types";

interface ColumnProps {
	id: string | number;
	title: string;
	activeTaskState?: [
		TaskType | null,
		React.Dispatch<React.SetStateAction<TaskType | null>>
	];
}

export const Column: React.FC<ColumnProps> = ({
	title,
	id,
	activeTaskState,
}) => {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [activeTask, setActiveTask] = activeTaskState || [null, () => {}];

	useEffect(() => {
		fetch("http://localhost:8080/todos?column=" + id)
			.then((res) => res.json())
			.then((res) => setTasks(res));
	}, [id]);

	const handleDrop = () => {
		if (!activeTask) return;

		fetch(`http://localhost:8080/todos/${activeTask.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ column: id }),
		})
			.then(() => {
				setTasks([activeTask, ...tasks]);
				setActiveTask(null);
			});
	};

	return (
		<Card
			onDragOver={(e) => e.preventDefault()}
			onDrop={handleDrop}
			className="w-[350px] flex flex-col bg-gray-100 shadow-md rounded-2xl overflow-hidden"
		>
			<div className="p-4 bg-gray-200 flex justify-between items-center">
				<h2 className="text-lg font-semibold">{title}</h2>
			</div>
			<ScrollArea className="flex-1 p-4 space-y-3">
				{tasks.map((task) => (
					<TaskCard
						{...task}
						key={task.id}
						setActiveTask={setActiveTask}
					/>
				))}
			</ScrollArea>
			<div className="p-4 bg-gray-200 flex justify-center">
				<Button variant="outline" className="w-full">
					Create new task
				</Button>
			</div>
		</Card>
	);
};
