import { GripVertical } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TaskType } from "@/types";

interface TaskCardProps {
	id: string | number;
	description: string;
	created_at: string;
	column: string | number;
	title: string;
	className?: string;
	setActiveTask?: (task: TaskType) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
	id,
	description,
	created_at,
	column,
	title,
	setActiveTask,
}) => {
	const [className, setClassName] = useState("");

	const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		setClassName("bg-red-500");
		setTimeout(() => {
			setClassName("hidden");
		}, 0);

		setActiveTask &&
			setActiveTask({
				id,
				title,
				description,
				column,
				created_at,
			});
	};

	return (
		<Card
			draggable
			onDragStart={onDragStart}
			onDragEnd={() => {
				setClassName("flex");
			}}
			className={cn(
				"bg-white shadow-sm flex items-center p-3 gap-3",
				className
			)}
		>
			<GripVertical className="text-gray-400" size={16} />
			<CardContent className="p-0 flex-1">{title}</CardContent>
		</Card>
	);
};

