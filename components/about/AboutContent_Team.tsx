import Image from "next/image"

const teamDevGym = [
  {
    name: "Elias",
    role: "Co-Founder",
    imageUrl: "/elias.png",
  },
  {
    name: "Burhan",
    role: "Co-Founder",
    imageUrl: "/burhan.png",
  },
  {
    name: "Joel",
    role: "Co-Founder",
    imageUrl: "/joel.png",
  },
  {
    name: "Yasin",
    role: "Co-Founder",
    imageUrl: "/yassin.png",
  },
  {
    name: "Yeran",
    role: "Co-Founder",
    imageUrl: "/yeran.png",
  },
]

export default function AboutContent_Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      {/* Background */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Text section */}
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>

          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {teamDevGym.map((item) => (
              <li key={item.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-20 w-20 rounded-full"
                    src={item.imageUrl}
                    alt="team_profile_img"
                    width={500}
                    height={500}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {item.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
