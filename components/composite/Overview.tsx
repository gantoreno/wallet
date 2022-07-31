import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { Card } from "../ui"

type OverviewProps = {}

const data = [
  { name: "Current", value: 2300 },
  { name: "Spent", value: 700 },
]
const colors = ["#2dd4bf", "#f87171"]

const Overview = ({}: OverviewProps) => {
  return (
    <Card>
      <div className="grid grid-cols-2">
        <div className="border-r border-r-gray-200">
          <div className="mb-2 text-xs font-light uppercase text-neutral-400">
            Current balance
          </div>
          <div className="mb-5">
            <h2 className="text-3xl font-bold text-teal-400">$2,300.00</h2>
          </div>
          <hr className="mb-5" />
          <div>
            <h3 className="mb-2 text-xs font-light uppercase text-neutral-400">
              Daily average:{" "}
              <span className="font-bold text-cyan-400">$30.00</span>
            </h3>
            <h3 className="mb-2 text-xs font-light uppercase text-neutral-400">
              Gained: <span className="font-bold text-teal-400">$3,000.00</span>
            </h3>
            <h3 className="text-xs font-light uppercase text-neutral-400">
              Spent: <span className="font-bold text-red-400">$700.00</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-5 text-center text-xs font-light uppercase text-neutral-400">
            Distribution
          </h3>
          <div className="mb-5 flex h-full items-center justify-center">
            <ResponsiveContainer maxHeight={80}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={data}
                  innerRadius={25}
                  outerRadius={40}
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 2]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <h3 className="text-right text-xs font-light uppercase text-neutral-400">
              <div className="mr-2 inline-flex h-2 w-2 rounded-sm bg-teal-400"></div>
              Good
            </h3>
            <h3 className="text-left text-xs font-light uppercase text-neutral-400">
              <span className="mr-2 inline-flex h-2 w-2 rounded-sm bg-red-400"></span>
              Bad
            </h3>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Overview
