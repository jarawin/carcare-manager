import React from "react";
import mockCustomers from "../../assets/data/mock/mockCustomers";
const column = [
  "Image",
  "User id",
  "Nickname",
  "Phone",
  "Email",
  "Rank",
  "Register id",
  "First serve time",
  "Lasttime Active",
  "Register time",
  "is_member",
  "is_register",
  "Action",
];

function Customers() {
  const [customers, setCustomers] = React.useState(mockCustomers);

  return (
    <div className="">
      <div class=" overflow-scroll relative shadow-md rounded-2xl">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  mr-5">
            <tr>
              {column.map((item, index) => (
                <th key={index} scope="col" class="py-3 px-6">
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="overflow-y-auto">
            {customers.map((item, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {item.map((item, index) => (
                  <td
                    key={index}
                    class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                  >
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
