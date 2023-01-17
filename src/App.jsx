import Toggle from "./Toggle.jsx";
import Test from "./Test.jsx";
import Progress from "./Progress.jsx";
import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState(7000);
  const [countOne, setCountOne] = useState(101);
  const [countTwo, setCountTwo] = useState(64);
  const [percent, setPercent] = useState(0);

  console.log(total);
  console.log(countOne);
  console.log(countTwo);
  return (
    <div>
      {/* <Test></Test> */}
      <div className="bg-[url('./bckGrnd.jpg')] bg-cover  bg-no-repeat pb-96"></div>
      <div className="flex justify-center">
        <div className="h-64 w-[41.375rem] -translate-y-24 rounded-lg  border-[1px]	bg-white shadow-xl">
          <div className=" flex justify-center">
            {" "}
            <svg
              className="-translate-y-8"
              width="56"
              height="56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <circle fill="#000" cx="28" cy="28" r="28" />
                <g fill-rule="nonzero">
                  <path
                    d="M15.565 28.565a1.93 1.93 0 0 1 2.606-.113l.122.113 10.142 10.142a1.93 1.93 0 0 1-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 0 1 0-2.728z"
                    fill="#444"
                  />
                  <path
                    d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 0 1-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 0 1-2.224.095l-.105-.095a1.616 1.616 0 0 1-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                    fill="#FFF"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-center font-terminator text-xl font-bold">
            Mastercraft Bamboo Monitor Riser
          </div>
          <div className="text-center font-normal text-zinc-500">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </div>
          <div className="flex justify-around py-10">
            <label
              htmlFor="my-modal-4"
              className=" modal-button btn relative h-[4.5rem] w-4/12  whitespace-nowrap rounded-full border-transparent bg-teal-600   py-4 text-base font-bold normal-case text-white hover:bg-teal-800
                          "
            >
              Back this project
            </label>
            <Toggle></Toggle>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" relative h-[27.25rem] md:h-44 w-[41.375rem]	-translate-y-12 rounded-lg border-[1px] bg-white shadow-xl">
          <div className="text-center  grid translate-y-6 grid-rows-3 md:grid-cols-3   md:divide-x-2   divide-inherit">
            <div className="mt-2 md:translate-y-6 md:pl-6">
              <div className=" font-terminator  text-3xl font-bold md:text-2xl">
                {total}
              </div>
              <div className="text-gray-400"> of the $100,00 backed</div>
               <hr class=" mt-2 mx-auto border-t-[1px]  w-[5rem] md:hidden" />
            </div>
            <div className="mt-4 md:translate-y-2 md:pl-6">
              <div className=" font-terminator text-3xl md:text-2xl  font-bold">5,007</div>
              <div className="text-gray-400"> total backers</div>
              <hr class=" mt-2 mx-auto border-t-[1px]  w-[5rem] md:hidden" />
            </div>
            <div className=" mt-8 md: md:pl-6">
              <div className="font-terminator  text-3xl md:text-2xl font-bold">56</div>
              <div className="text-gray-400"> days left</div>
            </div>
            <Progress percent={percent} setPercent={setPercent} />
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-16">
        <div className="h-[85rem] w-[41.375rem] rounded-lg border-[1px] bg-white shadow-xl">
          <h1 className=" pt-8 pl-12 text-lg font-bold"> About this project</h1>
          <p className="pl-12  pr-10 pt-8 leading-8  text-gray-400">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="pl-12  pr-10	 pt-4  leading-8  text-gray-400">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <div className="flex justify-center pt-6">
            <div className=" h-[17.625rem] w-[34.25rem] rounded-lg  border-[1px] ">
              <div className="flex justify-between pt-8 pl-10 ">
                <div className="  font-bold">Bamboo Stand</div>
                <div className="pr-10 text-sm font-semibold text-teal-600">
                  {" "}
                  Pledge $25 or more
                </div>
              </div>
              <div className=" pl-10 pr-6 pt-4 text-sm leading-6  text-gray-400">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                special Backer member list.
              </div>
              <div className=" flex justify-between pt-[3.125rem]">
                <div className=" pl-12 font-terminator text-3xl font-extrabold">
                  {countOne}
                </div>
                <div className="absolute pl-24  pt-2 text-xs text-gray-400">
                  left
                </div>
                <div className="pr-10">
                  <Test
                    color="teal"
                    collapze="collapseTwo"
                    total={total}
                    setTotal={setTotal}
                    countOne={countOne}
                    setCountOne={setCountOne}
                    countTwo={countTwo}
                    setCountTwo={setCountTwo}
                    setPercent={setPercent}
                    htmlFor={"my-modal-4"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6">
            <div className=" h-[17.625rem] w-[34.25rem] rounded-lg  border-[1px] ">
              <div className="flex justify-between pt-8 pl-10 ">
                <div className=" font-bold">Black Edition Stand</div>
                <div className="pr-10 text-sm font-semibold text-teal-600">
                  {" "}
                  Pledge $75 or more
                </div>
              </div>
              <div className=" px-10 pt-4 text-sm leading-6  text-gray-400">
                You get a Black Special Edition computer stand and a personal
                thank you. You'll be added to our Backer member list. Shipping
                is included.
              </div>
              <div className="flex justify-between pt-[3.125rem]">
                <div className="pl-12 font-terminator text-3xl font-extrabold">
                  {countTwo}
                </div>
                <div className="absolute pl-24 pt-2 text-xs text-gray-400">
                  left
                </div>
                <div className="pr-10">
                  <Test
                    color="teal"
                    collapze="collapseThree"
                    total={total}
                    setTotal={setTotal}
                    countOne={countOne}
                    setCountOne={setCountOne}
                    countTwo={countTwo}
                    setCountTwo={setCountTwo}
                    setPercent={setPercent}
                    htmlFor={"my-modal-4"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex cursor-text justify-center pt-6">
            <div className=" pointer-events-none h-[17.625rem] w-[34.25rem]   rounded-lg border-[1px] opacity-50 ">
              <div className="flex justify-between pt-8 pl-10 ">
                <div className="font-bold">Mahogany Special Edition</div>
                <div className="pr-10 text-sm font-semibold text-teal-600">
                  {" "}
                  Pledge $200 or more
                </div>
              </div>
              <div className=" pl-10 pr-6 pt-4 text-sm leading-6  text-gray-400">
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You'll be added to our Backer member
                list. Shipping is included.
              </div>
              <div className="flex justify-between pt-[3.125rem]">
                <div className="pl-12  font-terminator text-3xl font-extrabold">
                  0
                </div>
                <div className="absolute mr-10 translate-x-20 pt-2 text-xs text-gray-400">
                  left
                </div>
                <div className="gray-300 pr-10">
                  <Test
                    color="gray"
                    total={total}
                    setTotal={setTotal}
                    countOne={countOne}
                    setCountOne={setCountOne}
                    countTwo={countTwo}
                    setCountTwo={setCountTwo}
                    setPercent={setPercent}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
