export default function Progress({ percent }) {
  return (
    <div className="w-[45.01%] pl-4 pt-6">
      <div
        className="relative mb-4 h-3 w-[37.75rem] rounded-full bg-gray-200
        "
      >
        <div
          className="h-3 rounded-full bg-teal-600 dark:bg-gray-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

// lg:w-11/12 xl:w-[500px] relative  mb-4 h-2.5 rounded-full
//       bg-gray-200 dark:bg-gray-700 smlg:w-96

// lent-1:w-[385px] lent-2:w-[405px] lent-3:w-[440px] lent-4:w-[454px]
// lent-5:w-[477px] lent-6:w-[515px] lent-7:w-[540px] lent-8:w-[560px]
// lent-9:w-[590px] lent-10:w-[604px]"
