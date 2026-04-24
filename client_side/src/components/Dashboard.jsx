import { useEffect, useState } from "react";
function Dashboard() {
  const [pacts, setPacts] = useState([]);

  const getPacts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/pacts`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "something went wrong");
      }
      setPacts(data.pacts);
    } catch (err) {
      console.error("error", err.message);
    }
  };

  useEffect(() => {
    getPacts();
  }, []);
  return (
    <>
      <div className="w-full flex items-center justify-center ">
        <div className="flex flex-col w-[90vw] p-4 m-4 gap-10 shadow-md border-2 border-gray-300 rounded-lg">
          {pacts.length === 0 ? (
            <p className="text-red-400 font-bold text-xl">
              you dont have any pacts yet...
            </p>
          ) : (
            pacts.map((pact) => (
              <div
                key={pact._id}
                className="flex justify-center items-center gap-2 text-md "
              >
                gym friend:
                {pact.users.map((user) => (
                  <div key={user._id}>
                    <p>{user.email}</p>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
