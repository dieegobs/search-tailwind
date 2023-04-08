export default function Home() {
  return (
    <section>
      <div className="h-screen w-full background">

        <div className="flex h-[10%] justify-between p-5">
          <div>
            <p className="text-white">IO TEAM</p>
          </div>
          <div className="flex items-center gap-x-10 ">

            <div>
              <p className="text-white text-sm">LOGIN</p>
            </div>

            <div>
              <button className="border border-orange-300 text-white px-3 py-1 text-sm rounded-md">SIGN UP</button>
            </div>

          </div>
        </div>

        <div className="h-[90%]">
          <div className="h-[50%] w-full flex items-center justify-center pt-16">
            <p className="text-gray-300 text-4xl">Welcome to Diego Dev</p>
          </div>

        <div className="w-full flex justify-center">
          <input className="bg-gray-300 w-[30%] text-xs px-5 py-4 rounded-xl " placeholder="Search by Name, Projects. etc"></input>
        </div>

        </div>

      </div>
    </section>
  )
}
