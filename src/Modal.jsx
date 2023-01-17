import "./index.css";

export default function Modal({
  total,
  setTotal,
  value,
  limit,
  setCount,
  setCount1,
}) {
  function subtractFromTotal(value) {
    setTotal(total - parseInt(value));
    setCount((prevCount) => prevCount - 1);
    setCount1((prevCount1) => prevCount1 - 1);
  }

  return (
    <div className="  ">
      <label
        htmlFor="my-modal"
        className="btn whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
           hover:bg-teal-800 "
        onClick={() => subtractFromTotal(value)}
        disabled={value < limit}
      >
        Continue
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1 className="text-center text-lg font-bold">
            Thanks for your support!
          </h1>
          <div className="py-4 text-[0.93rem] tracking-wide text-gray-400">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed
          </div>
          <div className="modal-action flex justify-center">
            <label
              htmlFor="my-modal"
              className="btn  whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
           hover:bg-teal-800"
            >
              Got it!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Modal from "./Modal";
// import React, { useState } from "react";

// // Create a context for the input value
// // export const InputValueContext = React.createContext(0);

// export default function Test({ total, setTotal, setCount, setCount1 }) {
//   const [valueOne, setValueOne] = useState("");
//   const [valueTwo, setValueTwo] = useState("");
//   const [valueThree, setValueThree] = useState("");
//   const [valueFour, setValueFour] = useState("");

//   function subtractFromTotal(value) {
//     setTotal(total - parseInt(value));

//     // setCount((prevCount) => prevCount - 1);
//   }

//   return (
//     <div>
//       <div className="">
//         <label
//           htmlFor="my-modal-4"
//           className=" modal-button btn whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
//            hover:bg-teal-800"
//           style={{}}
//         >
//           {" "}
//           Select Reward
//         </label>
//       </div>
//       <input type="checkbox" id="my-modal-4" className="modal-toggle" />
//       <label htmlFor="my-modal-4" className="modal cursor-pointer">
//         <label
//           className="scrollbar-hide modal-box   relative h-[37rem] w-[41rem]  max-w-none "
//           for=""
//         >
//           <h1 className="text-lg font-bold">Back this project</h1>
//           <h2 className="pt-4 text-[0.93rem] tracking-wide text-gray-400">
//             Want to support us in bringing Mastercraft Bamboo Monitor Riser out
//             in the world?
//           </h2>
//           <div id="accordionExample" className="container">
//             <div class=" card my-4">
//               <div class="card-header h-[154px]  bg-white" id="headingOne">
//                 <h3
//                   class="mt-2 font-bold hover:text-teal-600"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseOne"
//                   aria-expanded="false"
//                   aria-controls="collapseOne"
//                 >
//                   Pledge with no reward
//                 </h3>
//                 <p className=" pt-2  text-sm leading-8 text-gray-400">
//                   Choose to support us without a reward if you simply believe in
//                   our project. As a backer, you will be signed up to receive
//                   product updates via email
//                 </p>
//               </div>
//               <div
//                 id="collapseOne"
//                 class="collapse"
//                 aria-labelledby="headingOne"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="card-body">
//                   <div className="flex justify-between">
//                     <h4 className="text-sm text-gray-400">Enter your pledge</h4>
//                     <div className=" pl-[9.775rem]">
//                       <input
//                         type="number"
//                         className=" h-[48px] w-[94px] rounded-3xl border-[1px]  focus:border-teal-500 focus:outline-none"
//                         onChange={(e) => setValueOne(e.target.value)}
//                         value={valueOne}
//                       />
//                     </div>
//                     {/*  */}
//                     <label
//                       htmlFor="my-modal"
//                       className="btn whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
//          hover:bg-teal-800 "
//                       value={valueOne}
//                       onClick={() => subtractFromTotal(value)}
//                       disabled={valueOne < 0}
//                     >
//                       Continue
//                     </label>

//                     {/* Put this part before </body> tag */}
//                     <input
//                       type="checkbox"
//                       id="my-modal"
//                       className="modal-toggle"
//                     />
//                     <div className="modal">
//                       <div className="modal-box">
//                         <h1 className="text-center text-lg font-bold">
//                           Thanks for your support!
//                         </h1>
//                         <div className="py-4 text-[0.93rem] tracking-wide text-gray-400">
//                           Your pledge brings us one step closer to sharing
//                           Mastercraft Bamboo Monitor Riser worldwide. You will
//                           get an email once our campaign is completed
//                         </div>
//                         <div className="modal-action flex justify-center">
//                           <label
//                             htmlFor="my-modal"
//                             className="btn  whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
//          hover:bg-teal-800"
//                           >
//                             Got it!
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {/*  */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="card">
//               <div class="card-header h-[154px] bg-white" id="headingTwo">
//                 <div className="  mt-2 flex justify-between">
//                   <h3
//                     class=" font-bold hover:text-teal-600"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseTwo"
//                     aria-expanded="false"
//                     aria-controls="collapseTwo"
//                   >
//                     Bamboo Stand
//                   </h3>
//                   <h3 className=" mr-40 text-sm font-semibold text-teal-600">
//                     {" "}
//                     Pledge $25 or more
//                   </h3>
//                   <h3 className="translate-x-4 font-bold"> 101</h3>
//                   <h3 className="mr-[2.4rem]">left</h3>
//                 </div>
//                 <p className=" pt-2  text-sm leading-8 text-gray-400">
//                   You get an ergonomic stand made of natural bamboo. You've
//                   helped us launch our promotional campaign, and you will be
//                   added to a special Backer member list
//                 </p>
//               </div>
//               <div
//                 id="collapseTwo"
//                 class="collapse"
//                 aria-labelledby="headingTwo"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div class="card-body">
//                   <div className="flex justify-between">
//                     <h4 className="text-sm text-gray-400">Enter your pledge</h4>
//                     <div className="pl-[9.775rem]">
//                       <input
//                         type="number"
//                         className=" h-[48px] w-[94px] rounded-3xl border-[1px]  focus:border-teal-500 focus:outline-none"
//                         onChange={(e) => setValueTwo(e.target.value)}
//                         value={valueTwo}
//                       />
//                     </div>
//                     {/*  */}
//                     <label
//                       htmlFor="my-modal-2"
//                       className="btn whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
//          hover:bg-teal-800 "
//                       onClick={() => subtractFromTotal(value)}
//                       disabled={valueTwo < 25}
//                     >
//                       Continue
//                     </label>

//                     {/* Put this part before </body> tag */}
//                     <input
//                       type="checkbox"
//                       id="my-modal-2"
//                       className="modal-toggle"
//                     />
//                     <div className="modal">
//                       <div className="modal-box">
//                         <h1 className="text-center text-lg font-bold">
//                           Thanks for your support!
//                         </h1>
//                         <div className="py-4 text-[0.93rem] tracking-wide text-gray-400">
//                           Your pledge brings us one step closer to sharing
//                           Mastercraft Bamboo Monitor Riser worldwide. You will
//                           get an email once our campaign is completed
//                         </div>
//                         <div className="modal-action flex justify-center">
//                           <label
//                             htmlFor="my-modal-2"
//                             className="btn  whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
//          hover:bg-teal-800"
//                           >
//                             Got it!
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                     {/*  */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="card my-4">
//               <div class="card-header h-[154px] bg-white" id="headingThree">
//                 <div className="mt-2 flex justify-between">
//                   <h3
//                     class=" font-bold hover:text-teal-600"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseThree"
//                     aria-expanded="false"
//                     aria-controls="collapseThree"
//                   >
//                     Black Edition Stand
//                   </h3>
//                   <h3 className="mr-[9.5rem] text-sm font-semibold text-teal-600">
//                     {" "}
//                     Pledge $75 or more
//                   </h3>
//                   <h3 className="translate-x-[0.7rem] font-bold"> 64</h3>
//                   <h3 className="mr-[1.8rem]">left</h3>
//                 </div>
//                 <p className=" pt-2  text-sm leading-8 text-gray-400">
//                   You get a Black Special Edition computer stand and a personal
//                   thank you. You will be added to our Backer member list.
//                   Shipping is included
//                 </p>
//               </div>
//               <div
//                 id="collapseThree"
//                 class="collapse"
//                 aria-labelledby="headingThree"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div class="card-body">
//                   <div className="flex justify-between">
//                     <h4 className="text-sm text-gray-400">Enter your pledge</h4>
//                     <div className="pl-[9.775rem]">
//                       <input
//                         type="number"
//                         className="  h-[48px] w-[94px] rounded-3xl border-[1px]  focus:border-teal-500 focus:outline-none"
//                         onChange={(e) => setValueThree(e.target.value)}
//                         value={valueThree}
//                       />
//                     </div>
//                     {/*  */}

//                     <label
//                       htmlFor="my-modal-3"
//                       className="btn whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
//          hover:bg-teal-800 "
//                       onClick={() => subtractFromTotal(value)}

//                       disabled={valueThree < 75}
//                     >
//                       Continue
//                     </label>

//                     {/* Put this part before </body> tag */}
//                     <input
//                       type="checkbox"
//                       id="my-modal-3"
//                       className="modal-toggle"
//                     />
//                     <div className="modal mt-36">
//                       <div className="modal-box ">
//                         <h1 className="text-center text-lg font-bold">
//                           Thanks for your support!
//                         </h1>
//                         <div className="py-4 text-[0.93rem] tracking-wide text-gray-400">
//                           Your pledge brings us one step closer to sharing
//                           Mastercraft Bamboo Monitor Riser worldwide. You will
//                           get an email once our campaign is completed
//                         </div>
//                         <div className="modal-action flex justify-center">
//                           <label
//                             htmlFor="my-modal-3"
//                             className="btn  whitespace-nowrap rounded-full border-transparent  bg-teal-600 font-bold normal-case text-white
//          hover:bg-teal-800"
//                           >
//                             Got it!
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {/*  */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="card my-4">
//               <div class="card-header h-[154px] bg-white" id="headingFour">
//                 <div className="mt-2 flex justify-between">
//                   <h3
//                     class=" font-bold hover:text-teal-600"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#collapseFour"
//                     aria-expanded="false"
//                     aria-controls="collapseFour"
//                   >
//                     Mahogany Special Edition
//                   </h3>
//                   <h3 className="mr-[5.5rem] text-sm font-semibold text-teal-600">
//                     {" "}
//                     Pledge $200 or more
//                   </h3>
//                   <h3 className="translate-x-[0.75rem] font-bold "> 0</h3>
//                   <h3 className="mr-[1.8rem]">left</h3>
//                 </div>
//                 <p className=" pt-2  text-sm leading-8 text-gray-400">
//                   You get two Special Edition Mahogany stands, a Backer T-Shirt,
//                   and a personal thank you. You will be added to our Backer
//                   member list. Shipping is included
//                 </p>
//               </div>
//               <div
//                 id="collapseFour"
//                 class="collapse"
//                 aria-labelledby="headingFour"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div class="card-body">
//                   <div className="flex justify-between">
//                     <h4 className="text-sm text-gray-400">Enter your pledge</h4>
//                     <div className="pl-[9.775rem]">
//                       <input
//                         type="number"
//                         className="  h-[48px] w-[94px] rounded-3xl border-[1px]  focus:border-teal-500 focus:outline-none"
//                         onChange={(e) => setValueFour(e.target.value)}
//                         value={valueFour}
//                       />
//                     </div>
//                     {/*  *
//                     <label

//                     {/* <Modal
//                       limit={200}
//                       total={total}
//                       setTotal={setTotal}
//                       value={valueFour}
//                     /> */}

//                     {/*  */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </label>
//       </label>
//     </div>
//   );
// }
