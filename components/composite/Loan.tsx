import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { Card } from "../ui"

type LoanProps = {}

const Loan = ({}: LoanProps) => {
  return (
    <div>
      <div className="mb-5 grid grid-cols-2 gap-5">
        <Card>
          <p className="text-xs font-light uppercase text-neutral-400">
            Work in progress
          </p>
        </Card>
        <Card>
          <p className="text-xs font-light uppercase text-neutral-400">
            Work in progress
          </p>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Card>
          <p className="text-xs font-light uppercase text-neutral-400">
            Work in progress
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Loan
