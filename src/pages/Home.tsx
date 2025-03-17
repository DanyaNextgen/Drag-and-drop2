import { Column } from "@/components/custom/Column";
import { ColumnType, TaskType } from "@/types";
import React, { useEffect, useState } from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const [columns, setColumns] = useState<ColumnType[]>([]);
	const [activeTask, setActiveTask] = useState<TaskType | null>(null);

	useEffect(() => {
		fetch("http://localhost:8080/columns")
			.then((res) => res.json())
			.then((res) => setColumns(res));
	}, []);

	return (
		<section className="flex items-start justify-start gap-6">
			{columns.map((column) => (
				<Column
					key={column.id}
					title={column.title}
					id={column.id}
					activeTaskState={[activeTask, setActiveTask]}
				/>
			))}
		</section>
	);
};

export default Home;
