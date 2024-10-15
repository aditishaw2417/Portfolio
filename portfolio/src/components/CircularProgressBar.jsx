import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const CircularProgressBar = () => {
  const data = [
    { name: "Java", value: 85 },
    { name: "Python", value: 15 },
    { name: "React", value: 75 },
    { name: "HTML", value: 90 },
    { name: "CSS", value: 78 },
    { name: "Tailwind", value: 70 },
    { name: "MySQL", value: 90 },
    { name: "Git", value: 82 },
    { name: "JavaScript", value: 62 },
  ];
  const COLORS = [
    "#4B0082",
    "maroon",
    "#D2691E ",
    "#A0522D",
    "#C71585",
    "#9B870C",
    "#0B3D91",
    "#C70039",
    "#900C3F",
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CircularProgressBar;
