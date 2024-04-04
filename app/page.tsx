import Categories from "@/components/Categories";
import Dua from "@/components/Dua";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="mb-3">
        <Navbar />
      </div>
      <div className="grid grid-cols-8">
        <div className="col-span-2">
          <Categories />
        </div>
        <div className="col-span-6">
          <Dua />
        </div>
      </div>
    </main>
  );
}
