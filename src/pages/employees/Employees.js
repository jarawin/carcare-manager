import React from "react";
import mockUpEmployees from "../../assets/data/mock/mockEmployees";

function Employees() {
  const Employee_info = [
    "Nickname",
    "Register Status",
    "Phone Number",
    "User ID",
    "Permission",
    "Last time Active",

    "Salary Amount",
    "Salary Type",
    "First name",
    "Last name",
    "District",
    "Sub District",
    "Address",
    "Province",
    "Postcode",
    "Bank number",
    "Bank Account name",
    "Bank name",
    "Work Background",
    "Graduate Certificate",
    "action",
  ];

  return (
    <div class="overflow-x-auto relative shadow-md ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Employee_info.map((item, index) => (
              <th key={index} scope="col" class="py-3 px-6">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {mockUpEmployees.map((item, index) => (
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
  );
}

export default Employees;
