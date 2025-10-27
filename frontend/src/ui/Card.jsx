import { Pencil, Trash } from "lucide-react"; // or any icons you use

export default function Card({ type, title, subtitle, amount, extraInfo }) {
  const isCategory = type === "category";

  return (
    <div className="card border rounded-2xl p-4 flex justify-between items-start shadow-sm hover:shadow-md transition">
      <div>
        <h4 className="font-semibold text-lg text-gray-900">{title}</h4>

        {/* {isCategory ? (
          <p className="text-sm text-gray-500">{extraInfo} expenses</p>
        ) : (
          <p className="text-sm text-gray-500">{subtitle}</p>
        )} */}

        {!isCategory && (
          <div className="flex gap-2 mt-3">
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <Pencil size={16} />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <Trash size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="text-right">
        {isCategory ? (
          <div>
            <button className="p-2 border rounded-lg hover:bg-gray-100 mr-1">
              <Pencil size={16} />
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-100">
              <Trash size={16} />
            </button>
          </div>
        ) : null}
        <p className="font-bold text-lg text-gray-900 mt-2">
          ${amount.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
