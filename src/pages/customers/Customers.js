import React from "react";
import mockCustomers from "../../assets/data/mock/mockCustomers";
const RankList = ["Bronze","Silver","Gold"]
const memberList = ["General","Member"]
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
  "is_register",
];
// const addData = () =>{
//   const Add = e=>{
//     const data = {
//       image,userId,nickname,phone,email,rank,registerId,firstServetime,lastTimeactive,registerTime,isMember,isRegister,action
//     }
//     alert(
//       <div>
//         <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UserID :</label>
//         <input onChange={e=>{setUserid(e.target.value)}} value={userId} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
//       </div>
//     )
//   }

function Customers() {
  const [showRank,setShowRank] = React.useState(false)
  const [rank,setRank] = React.useState("ระดับ")
  const handleDropdownRank= e=>{
    setRank(e.target.id)
    setShowRank(false)
  }

  const [showMember,setShowMember] = React.useState(false)
  const [member,setMember] = React.useState("เป็นสมาชิกหรือไม่")
  const handleDropdownMember= e=>{
    setMember(e.target.id)
    setShowMember(false)
  }

  const [customers, setCustomers] = React.useState(mockCustomers);
  const [image, setImage] = React.useState("");
  const [userId, setUserID] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [registerID, setRegisterID] = React.useState("");
  const [firstServeTime, setFirstServeTime] = React.useState("");
  const [lastTimeActive, setLastTimeActive] = React.useState("");
  const [registerTime, setRegistertime] = React.useState("");
  const [isRegister, setIsRegister] = React.useState("");
  const [isShow, setIsShow] = React.useState(false);
  const handleSubmit = e=>{
    e.preventDefault()
    const data = {
      image,userId,nickname,phone,email,rank,registerID,firstServeTime,lastTimeActive,registerTime,isRegister
  }
  // const myFilegrad =   .current.file[0];
	// 	console.log(myFilegrad);

  // const myFilework = fileRefforwork.current.file[0];
	// console.log(myFilework);
  alert(JSON.stringify(data))
}

  return (
    <div className="">
      <div onClick={e=>{setShowRank(false)}} className={(showRank ? "absolute": "hidden")}></div>
      <div onClick={e=>{setShowMember(false)}} className={(showMember ? "absolute": "hidden")}></div>

      <div class="text-white w-full bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <button
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="defaultModal"
          onClick={e=>setIsShow(true)}
        >
          เพิ่มข้อมูลลูกค้า
        </button>
      </div>
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class={(isShow ? "" :"hidden") +" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"}
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                เพิ่มข้อมูลลูกค้า
              </h3>
              <button onClick={e=>setIsShow(false)} 
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            
            <div class="p-6 space-y-6">
              <div class="grid grid-cols-2">
              <div>
                  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">รูป</label>
                    <p>
                      <input type="file" onChange={e=>{setImage(e.target.value)}} value={image} class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input"></input>
                    </p>
                </div>
                  <div class="ml-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UserID</label>
                    <input onChange={e=>{setUserID(e.target.value)}} value={userId} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
            </div>
            
            <div class="grid grid-cols-2">
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชื่อเล่น</label>
                    <input onChange={e=>{setNickname(e.target.value)}} value={nickname} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
                  <div class="ml-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">เบอร์โทร</label>
                    <input onChange={e=>{setPhone(e.target.value)}} value={phone} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
            </div>

            <div class="grid grid-cols-2">
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input onChange={e=>{setEmail(e.target.value)}} value={email} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
                  <div class="ml-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rank</label>
                    <button onClick={e=>{setShowRank(true)}} onBlur={e=>{setShowRank(false)}} id="dropdownDefault" data-dropdown-toggle="dropdown" class=" w-52 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{rank} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                      <div  id="dropdown" class={(showRank ?"": "hidden")+" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"}>
                          <ul  class="absolute bg-gray-200 divide-y divide-gray-100 shadow dark:bg-gray-700 rounded-lg">
                            {RankList.map((data,idx)=>{
                              return(
                                <li key={idx} >
                                <a onClick={handleDropdownRank} id={data} href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{data}</a>
                              </li>
                              )
                            })}
                            
                          </ul>
                      </div>
                  </div>
            </div>
              
            <div class="grid grid-cols-2">
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชื่อ</label>
                    <input onChange={e=>{setRegisterID(e.target.value)}} value={registerID} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
                  <div className="ml-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First serve time</label>
                    <input onChange={e=>{setFirstServeTime(e.target.value)}} value={firstServeTime} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
            </div>  

            <div class="grid grid-cols-2">
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last time active</label>
                    <input onChange={e=>{setLastTimeActive(e.target.value)}} value={lastTimeActive} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
                  <div className="ml-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Register time	</label>
                    <input onChange={e=>{setRegistertime(e.target.value)}} value={registerTime} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
            </div>    

            <div class="grid grid-cols-2">
            <div class="">
                  <div>
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Member</label>
                      <button onClick={e=>{setShowMember(true)}} onBlur={e=>{setShowMember(false)}}  id="dropdownDefault" data-dropdown-toggle="dropdown" class=" w-52 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{member} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div  id="dropdown" class={(showMember ?"": "hidden")+" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"}>
                            <ul  class="absolute bg-gray-200 divide-y divide-gray-100 shadow dark:bg-gray-700 rounded-lg">
                              {memberList.map((data,idx)=>{
                                return(
                                  <li key={idx} >
                                  <a onClick={handleDropdownMember} id={data} href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{data}</a>
                                </li>
                                )
                              })}
                              
                            </ul>
                        </div>
                    </div>
                  </div>
                    
                  <div className="ml-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is register</label>
                    <input onChange={e=>{setIsRegister(e.target.value)}} value={isRegister} type="text" id="Firstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></input>
                  </div>
            </div>
          </div>
            
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button onClick={handleSubmit}
                data-modal-toggle="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ยืนยันข้อมูล
              </button>
              <button onClick={e=>setIsShow(false)}
                data-modal-toggle="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      </div>

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
