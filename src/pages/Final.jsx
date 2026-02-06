import RisingHearts from "../components/RisingHearts";

export default function Final() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-200 text-center relative overflow-hidden">
      <RisingHearts />

      <h1 className="text-5xl font-bold mb-6 z-10">I Love You My Q2</h1>
      <p className="text-xl max-w-xl z-10">
        No matter what happens, no matter where life takes us,
        I will always choose you.
      </p>
    </div>
  );
}
