import React from "react";
import Input from "./form-elements/Input";
import Image from "next/image";
import duaImg from "../public/dua01.png";
import {
  PiArrowBendDownRightThin,
  PiArrowBendLeftDownThin,
} from "react-icons/pi";

const Categories = () => {
  return (
    <section className="bg-bgWhiteColor rounded-md">
      <div>
        <h2 className="bg-primaryColor rounded-t-md text-center py-2 text-bgWhiteColor font-semibold">
          Category
        </h2>
        <Input isIcon={false} className="mx-2 my-2" />

        <main className="space-y-2 max-h-[calc(100vh-220px)] overflow-auto">
          {[1, 2, 5, 3, 3, 3, 3, 3].map((item) => (
            <div className="">
              <div className="flex justify-between px-2 py-2 bg-bgWhiteColor shadow-sm hover:bg-bgGrayColor mx-2 rounded-md">
                <div className="flex gap-3">
                  <div className="bg-bgWhiteColor p-2 flex items-center justify-center rounded-md">
                    <Image
                      src={duaImg}
                      width={25}
                      height={15}
                      alt=""
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Dua's Importance</h3>
                    <p className="text-sm">Subcategory: 7</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">21</h3>
                  <p className="text-sm">Duas</p>
                </div>
              </div>

              <div className="border-l-2 border-dotted border-primaryColor mx-4 relative">
                {[4, 4, 4, 4, 4, 4, 4, 4, 44].map((item, index) => (
                  <>
                    <p key={index} className="px-3 text-base">
                      <span className="absolute left-[-4px] bg-primaryColor h-1.5 w-1.5 rounded-full mt-2"></span>
                      Shelter from evil consequences and a abc rejoicing of the
                      enemy
                    </p>

                    {[5, 5, 5, 5, 5, 5, 5].map((item) => (
                      <div className="flex gap-1 items-center m-2.5">
                        <PiArrowBendDownRightThin />
                        <p className="text-sm">Allah's guidance #1</p>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Categories;
