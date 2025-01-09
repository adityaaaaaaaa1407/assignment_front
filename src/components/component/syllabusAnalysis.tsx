const data = [
  {
    label: "HTML Tools, Forms, History",
    percentage: 80,
    color: "text-blue-500 bg-blue-500",
  },
  {
    label: "Tags & References in HTML",
    percentage: 60,
    color: "text-orange-500 bg-orange-500",
  },
  {
    label: "Tables & References in HTML",
    percentage: 24,
    color: "text-red-500 bg-red-500",
  },
  {
    label: "Tables & CSS Basics",
    percentage: 96,
    color: "text-green-500 bg-green-500",
  },
];
// className="w-full lg:w-1/3"
const SyllabusAnalysis = () => {
  return (
    <div className="w-full lg:w-1/3 px-4 md:px-6 py-2 mx-auto bg-white rounded-lg shadow-md border border-gray-300">
      <h2 className="text-lg font-bold mb-8 ">Syllabus Wise Analysis</h2>
      <div className="w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full mb-10"
          >
            <div className="flex-1">
              <p className="text-sm font-medium xl:mb-3 mb-1 text-gray-700">
                {item.label}
              </p>
              <div className="flex items-center justify-between">
                <div className="w-full h-2 mt-2 bg-gray-200 rounded-full relative">
                  <div
                    className={`h-2 rounded-full ${item.color.split(" ")[1]}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div
                  className={`ml-4 text-sm font-bold ${
                    item.color.split(" ")[0]
                  }`}
                >
                  {item.percentage}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
